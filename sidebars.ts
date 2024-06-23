import type { SidebarsConfig, PropSidebarItemHtml, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';

function link(label: string, href: string, description?: string): PropSidebarItemLink {
  return {
    type: 'link',
    label: label,
    href: href,
    description,
  }
}

function doc(docId: string, label?: string): any {
  return {
    type: 'doc',
    label: label,
    id: docId,
  }
}

function title(title: string): PropSidebarItemHtml {
  return {
    type: 'html',
    value: `<span class="sidebar-title-only">${title}</span>`,
    defaultStyle: true,
  }
}

function auto(dirName: string, title: string, description?: string): any {
  return {
    type: 'category',
    label: title,
    items: [{ type: "autogenerated", dirName: dirName }],
    link: { type: 'generated-index' },
    description,
  }
}

const sidebars: SidebarsConfig = {
  mainSidebar: [
    title("Getting Started"),
    "index",
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        doc("getting-started/csharp", "C# .NET"),
        doc("getting-started/cpp", "C++"),
        doc("getting-started/electron", "JS / Electron"),
        doc("getting-started/rust", "Rust"),
        doc("getting-started/fusion-cli", "Fusion CLI"),
      ],
      link: { type: 'generated-index' },
    },
    {
      type: 'category',
      label: 'Sample Apps',
      items: [
        link("C# / AvaloniaUI", "https://github.com/velopack/velopack/tree/master/samples/AvaloniaCrossPlat"),
        link("C# / Uno", "https://github.com/velopack/velopack/tree/develop/samples/UnoSample"),
        link("C# / WPF", "https://github.com/velopack/velopack/tree/master/samples/VeloWpfSample"),
        link("C++ / Win32", "https://github.com/velopack/velopack.fusion/tree/master/for-cpp/samples/win32"),
        link("JS / Electron", "https://github.com/velopack/velopack.fusion/tree/master/for-js/samples/electron-forge"),
        link("Rust / Iced", "https://github.com/velopack/velopack.fusion/tree/master/for-rust/samples/iced"),
      ],
      link: { type: 'generated-index' },
    },

    title("Essentials"),
    auto("integrating", "Integrating", "Learn how to integrate the Velopack library with your application."),
    auto("packaging", "Packaging", "Learn how to package your application with Velopack."),
    auto("distributing", "Distributing", "Learn how to distribute your Velopack releases to your users."),

    title("Advanced"),
    auto("troubleshooting", "Troubleshooting", "Debugging steps, common issues and how to resolve them."),
    auto("contributing", "Contributing", "Learn how to contribute to the Velopack project."),
    auto("migrating", "Migrating", "Learn how to migrate your existing application to Velopack."),
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: "Library Reference",
      link: { type: 'doc', id: "reference/index" },
      collapsed: false,
      collapsible: false,
      items: [
        auto("reference/cs", "C#", "The C# API reference for Velopack. See the available namespaces below."),
        doc("reference/cpp/api", "C++"),
        {
          type: 'category',
          label: "JS",
          items: [
            { type: "autogenerated", dirName: "reference/js/classes" },
            { type: "autogenerated", dirName: "reference/js/enums" },
          ],
          link: { type: 'generated-index' },
        },
        link("Rust", "https://docs.rs/velopack", "Link to docs.rs/velopack"),
      ],
    },
  ]
};

export default sidebars;
