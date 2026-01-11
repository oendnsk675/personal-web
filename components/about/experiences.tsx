import { Timeline } from '@/components/ui/timeline';
import eRentada from '@/public/images/thumbnail/e-rentada-1.png';
import ifImage from '@/public/images/thumbnail/if-2.png';
import Image from 'next/image';
import Experience from '../pattern/experience';

const data = [
  {
    title: 'Full-stack Developer',
    startAt: new Date('2025-03-03'),
    endAt: new Date(),
    content: (
      <div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg mb-2">Full-stack Developer</h4>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Image
              src="https://media.licdn.com/dms/image/v2/C560BAQG_lzelBaX9-g/company-logo_100_100-alternative/company-logo_100_100-alternative/0/1630654822933?e=1769644800&v=beta&t=tUC95wy3v05-KVXya5hnc5D4QeXUF11cHbZXboa1-dw"
              width={20}
              height={20}
              className="w-5 h-w-5 rounded"
              alt="Kawan Sehat Logo"
            ></Image>
            <span>PT Kawan Sehat Indonesia - Jakarta · Remote</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Web Developer',
    startAt: new Date('2023-08-01'),
    endAt: new Date('2025-03-03'),
    content: (
      <div>
        <div className="mb-4">
          {/* job title */}
          <h4 className="font-semibold text-lg mb-2">Web Developer</h4>

          {/* company */}
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQHejxEN-sKXpg/company-logo_100_100/company-logo_100_100/0/1630610747476?e=1769644800&v=beta&t=S4_4MnWLOuz8TvrnB3FaKPEcjyBFGE-_rzv0u91i9q4"
              width={20}
              height={20}
              className="w-5 h-w-5 rounded"
              alt=""
            ></Image>
            <span>LKP ITEC - Mataram, West Nusa Tenggara · Remote</span>
          </div>

          {/* description and gallery */}
          <div className="text-muted-foreground">
            {/* description */}
            <ul className="list-disc list-inside mb-4">
              <li className="text-pretty">
                Developed the Instalasi Farmasi project with Vue JS and Express
                JS, managing 17,149 medications and 50,873 medical devices while
                implementing periodic synchronization with the Satu Sehat system
                to ensure accurate and up-to-date data.
              </li>
              <li className="text-pretty">
                Maintained the Billing Monitoring system using Alpine JS and
                Express JS, optimizing billing workflows and managing an average
                of 428 invoices daily
              </li>
              <li className="text-pretty">
                Designed and developed a scalable room booking application using
                Next JS, aiming to streamline reservation management with
                features like real-time availability and user-friendly
                scheduling.
              </li>
            </ul>
            {/* gallery */}
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1 aspect-video overflow-hidden object-cover flex justify-center rounded-lg">
                <Image src={eRentada} alt="e-rentada" />
              </div>
              <div className="col-span-1 aspect-video overflow-hidden object-cover flex justify-center rounded-lg">
                <Image src={ifImage} alt="instalasi farmasi" />
              </div>
              <div className="col-span-1 aspect-video overflow-hidden object-cover flex justify-center rounded-lg">
                <Image
                  src={
                    'https://media.licdn.com/dms/image/v2/D562DAQEB7KMHvgvmOg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733052727700?e=1768654800&v=beta&t=b-68botieGwgoeIg_B89XArmXEiB-vtnQlj6ogNTh84'
                  }
                  width={300}
                  height={80}
                  alt="billing monitor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Machine Learning Engineer',
    startAt: new Date('2025-09-01'),
    endAt: new Date('2025-12-01'),
    content: (
      <div>
        <div className="mb-4">
          {/* job title */}
          <h4 className="font-semibold text-lg mb-2">
            Machine Learning Engineer
          </h4>

          {/* company */}
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <Image
              src="https://media.licdn.com/dms/image/v2/D560BAQHuVTv2n1mWhA/company-logo_100_100/company-logo_100_100/0/1704903231161?e=1769644800&v=beta&t=MhzZg8pOIKnBRVI2fp9q-d51mgvr61Cswu2RVV0pqM0"
              width={20}
              height={20}
              className="w-5 h-w-5 rounded"
              alt=""
            ></Image>
            <span>Squadrones AI - Mataram, West Nusa Tenggara · Hybrid</span>
          </div>

          {/* description and gallery */}
          <div className="text-muted-foreground">
            {/* description */}
            <ul className="list-disc list-inside mb-4"></ul>
            {/* gallery */}
            <div className="grid grid-cols-3 gap-2"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Software Engineer',
    startAt: new Date('2023-03-01'),
    endAt: new Date('2023-06-01'),
    content: (
      <div>
        <div className="mb-4">
          {/* job title */}
          <h4 className="font-semibold text-lg mb-2">Software Engineer</h4>

          {/* company */}
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <Image
              src="https://media.licdn.com/dms/image/v2/C510BAQE_jLQ3JsZAvw/company-logo_100_100/company-logo_100_100/0/1630611576787/sonicboom_logo?e=1769644800&v=beta&t=kMg9-LcXo2bz9ZgNFNaaLQga7dbDl7o5OV2tEsKjzj8"
              width={20}
              height={20}
              className="w-5 h-w-5 rounded"
              alt=""
            ></Image>
            <span>Sonicboom Solutions - Kuala Lumpur, Malaysia · Remote</span>
          </div>

          {/* description and gallery */}
          <div className="text-muted-foreground">
            {/* description */}
            <p>
              I work as a software engginer intern focused on building web
              applications using the ASP.NET Framework, below is what I've done:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-pretty">
                Develop real-time chat web applications using SignalR on ASP.NET
                Framework
              </li>
              <li className="text-pretty">
                Build symmetric and asymmetric encrypted web applications using
                multiple algorithms (DES, 3DES, Hash and Salt, MD5)
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Front-end Web Developer',
    startAt: new Date('2022-04-01'),
    endAt: new Date('2022-09-01'),
    content: (
      <div>
        <div className="mb-4">
          {/* job title */}
          <h4 className="font-semibold text-lg mb-2">
            Front-end Web Developer
          </h4>

          {/* company */}
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4D0BAQGId3BUKnYBcw/company-logo_100_100/company-logo_100_100/0/1653561911593?e=1769644800&v=beta&t=DBT599kP-O9Bz7A_SASPfR-5ERuUmzZsZ7eALY3SbkI"
              width={20}
              height={20}
              className="w-5 h-w-5 rounded"
              alt=""
            ></Image>
            <span>Yada Ekidanta - Bandung, West Java, Indonesia · Remote</span>
          </div>

          {/* description and gallery */}
          <div className="text-muted-foreground">
            {/* description */}
            <p>working as a frontend web developer, here's what I've done:</p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-pretty">
                Designed and implemented responsive desktop and mobile views for
                the Bajaga e-commerce platform using Laravel and Vue JS,
                ensuring an optimal user experience across devices.
              </li>
              <li className="text-pretty">
                Contributed to the development of the Team Sync project, a team
                management and project collaboration SaaS application, by
                creating interactive and responsive UI components using Next JS
                to enhance user experience and streamline workflows.
              </li>
              <li className="text-pretty">
                Developed an Android application for blood sugar monitoring,
                utilizing Java for the front-end and Laravel for the back-end to
                ensure seamless functionality and user interaction.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Experiences() {
  return (
    <div className="relative">
      <Experience className="hidden md:absolute z-10 md:w-full inset-x-0 -inset-20" />
      <Timeline data={data} />
    </div>
  );
}
