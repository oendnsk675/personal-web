'use client';

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="w-full relative" id="discuss">
      <Giscus
        id="comments"
        repo="oendnsk675/personal-web"
        repoId="R_kgDOQO0vcw"
        category="General"
        categoryId="DIC_kwDOQO0vc84CyEyn"
        mapping="pathname"
        //   term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
