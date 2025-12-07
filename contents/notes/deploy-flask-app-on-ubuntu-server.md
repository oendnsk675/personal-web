---
title: 'Deploy Flask App on Ubuntu Server'
description: ''
categories: ['Next.js', 'TailwindCSS', 'ExpressJS', 'PostgreSQL']
date: 2025/01/01
---

## Background

Flask is a popular Python web framework that allows developers to create web applications quickly and easily. In this document, we will discuss the steps involved in deploying a Flask app on an Ubuntu server.

## Prerequisites

Before proceeding with the deployment process, make sure that you have the following prerequisites:

- An Ubuntu server with sudo access.
- Python 2/3 installed on the server.
- GIT
- A Flask app to deploy.

Assuming the server already has:

1. **Nginx** (web server)
2. **Python** (runtime)
3. **Supervisor** (process manager)
4. **Gunicorn** (WSGI server)

## Illustration: How Gunicorn, Nginx, and Flask Work Together

```bash
        +-----------+
        |  Client   |
        +-----------+
             |
    HTTP     |     Forwarding
             V
        +-----------+
        |  Nginx    |
        +-----------+
             |
    HTTP     |     Reverse Proxy
             V
        +-----------+
        |  Gunicorn |
        +-----------+
             |
    WSGI     |     Application Logic
             V
        +-----------+
        |  Flask    |
        +-----------+
             |
    HTTP     |     Response
             V
        +-----------+
        |  Nginx    |
        +-----------+
             |
    HTTP     |     Delivering
             V
        +-----------+
        |  Client   |
        +-----------+
```

### Explanation

1. Client sends HTTP request.
2. Nginx receives it.
3. Nginx handles SSL, load balancing, etc.
4. Nginx reverse proxies request to Gunicorn.
5. Gunicorn handles Flask app.
6. Flask processes logic and returns response.
7. Gunicorn sends response back to Nginx.
8. Nginx forwards final output to client.

## Steps to Deploy Flask App on Ubuntu Server

### 1. Create Virtual Environment

Adjust if using a different tool.

### 2. Install Gunicorn

```
pip install gunicorn
```

### 3. Create Gunicorn Start Script

Create directory `bin` inside your project, then create file `gunicorn_start`:

```bash
#!/bin/bash

NAME="project_dir"
FLASKDIR=/home/user/your_project_name/$NAME
SOCKFILE=/home/user/your_project_name/$NAME/run/gunicorn.sock
USER=user
GROUP=user
NUM_WORKERS=2
TIMEOUT=120

echo "Starting $NAME as `whoami`"

# Activate the virtual environment
cd $FLASKDIR
source $FLASKDIR/env/bin/activate
export PYTHONPATH=$FLASKDIR:$PYTHONPATH

RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR

exec $FLASKDIR/env/bin/gunicorn --bind 0.0.0.0:5000 run:app \
  --name $NAME \
  --workers $NUM_WORKERS \
  --timeout $TIMEOUT \
  --user=$USER --group=$GROUP \
  --log-level=debug \
  --log-file=-
```

Run using:

```
./gunicorn_start
```

### 4. Setup Nginx

Create file `/etc/nginx/sites-available/project_name`:

```bash
upstream project_name {
        server unix:/home/user/project_name/run/gunicorn.sock fail_timeout=0;
}

server {
        listen 80;
        server_name xxxxx.com;

        access_log      /home/user/project_name/dir/log/nginx-access.log;
        error_log       /home/user/project_name/dir/log/nginx-error.log;
        client_max_body_size 300M;

        location /static/{
            alias /home/user/project_name/dir/static/;
        }

       location / {
                proxy_pass http://127.0.0.1:5000;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}
```

Create symlink:

```bash
sudo ln -s /etc/nginx/sites-available/project_name /etc/nginx/sites-enabled/project_name
```

### 5. Setup Supervisor

Create file `/etc/supervisor/conf.d/project_name.conf`:

```bash
[program:project_name]
command = /home/user/project_name/bin/gunicorn_start
user = user
stdout_logfile = /home/user/project_name/log/gunicorn_supervisor.log
redirect_stderr = true
autorestart = true
environment=LANG=en_US.UTF-8,LC_ALL=en_US.UTF-8
```

Reload Supervisor:

```
sudo supervisorctl reread
sudo supervisorctl update
```

Useful commands:

- `sudo supervisorctl start project_name`
- `sudo supervisorctl stop project_name`
- `sudo supervisorctl restart project_name`
- `sudo supervisorctl status`

```

```
