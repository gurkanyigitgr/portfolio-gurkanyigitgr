import React from "react";

const MDXComponents = {
  h1: (props: any) => (
    <h1
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-6 mt-8"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-gray-200 mb-3 mt-6"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="text-gray-300 mb-4 leading-relaxed text-lg" {...props} />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-800 text-cyan-400 px-2 py-1 rounded text-sm font-mono border border-gray-700"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6 border border-gray-700"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="text-gray-300" {...props} />,
  strong: (props: any) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  em: (props: any) => <em className="text-cyan-400 italic" {...props} />,
  a: (props: any) => (
    <a
      className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-cyan-400 pl-4 italic text-gray-400 my-4"
      {...props}
    />
  ),
};

export default MDXComponents;
