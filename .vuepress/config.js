const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'OpenCore Install Guide',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	["link", { rel:"'stylesheet", href: "/styles/website.css" }, ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  
  themeConfig: {
	lastUpdated: true,
	repo: 'https://github.com/dortania/OpenCore-Desktop-Guide',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
	logo: '/homepage.png',
    nav: [
      {
        text: 'Dortania Guides',
        ariaLabel: 'Language Menu',
        items: [
            { text: 'Home Site', link: 'https://dortania.github.io/' },
			{ text: 'OpenCore Post-Install', link: 'https://dortania.github.io/OpenCore-Post-Install/' },
            { text: 'GPU Buyers Guide', link: 'https://dortania.github.io/GPU-Buyers-Guide/' },
			{ text: 'Wireless Buyers Guide', link: 'https://dortania.github.io/Wireless-Buyers-Guide/' },
			{ text: 'Anti Buyers Guide', link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/' },
          ]
      },
	  /*
      {
        text: 'Github',
        link: 'https://github.com/dortania/OpenCore-Desktop-Guide'
      }
	  */
    ],
    sidebar: [
        {
          title: 'Introduction',
          collapsable: false,
		  sidebarDepth: 1,
          children: [
            '',
			'why-oc',
			'terminology',
			'macos-limits',
          ]
		  
        },
        {
          title: 'USB Creation',
          collapsable: false,
	  sidebarDepth: 1,
          children: [
	    {
                title: 'Creating the USB',
		    collapsable: true,
		    path: '/installer-guide/',
		    sidebarDepth: 2,
		    children: [
		    '/installer-guide/mac-install',
	        '/installer-guide/winblows-install',
		    '/installer-guide/linux-install', 
		    ],
	    },
	    '/installer-guide/opencore-efi',
	    'ktext',
	    ['https://dortania.github.io/Getting-Started-With-ACPI/', 'Getting started with ACPI'],
            '/config.plist/',
          ]
        },
	{
	  title: 'Configs',
	  collapsable: false,
          children: [
            {
          	title: 'Intel Desktop config.plist',
          	collapsable: true,
          	children: [
            	  '/config.plist/ivy-bridge',
            	  '/config.plist/haswell',
            	  '/config.plist/skylake',
            	  '/config.plist/kaby-lake',
            	  '/config.plist/coffee-lake',
            	  '/config.plist/comet-lake',
          	]
            },
            {
          	title: 'Intel Laptop config.plist',
          	collapsable: true,
          	children: [
            	  '/config-laptop.plist/ivy-bridge',
            	  '/config-laptop.plist/haswell',
				  '/config-laptop.plist/broadwell',
            	  '/config-laptop.plist/skylake',
            	  '/config-laptop.plist/kaby-lake',
            	  '/config-laptop.plist/coffee-lake',
				  '/config-laptop.plist/coffee-lake-plus',
            	  '/config-laptop.plist/icelake',
          	]
            },
            {
          	title: 'Intel HEDT config.plist',
          	collapsable: true,
          	children: [
            	  '/config-HEDT/haswell-e',
            	  '/config-HEDT/broadwell-e',
            	  '/config-HEDT/skylake-x',
          	]
            },
            {
          	title: 'AMD Desktop config.plist',
          	collapsable: true,
          	children: [
            	  '/AMD/fx',
            	  '/AMD/zen',
          	]
            }
	  ]
	},
        {
          title: 'Installation',
          collapsable: false,
          children: [
			'/installation/installation-process',
            
          ]
        },
        {
          title: 'Troubleshooting',
          collapsable: true,
          children: [
            '/troubleshooting/troubleshooting',
			'/troubleshooting/debug',
			'/troubleshooting/boot',
          ]
        },
        {
          title: 'Post Install',
          collapsable: true,
          children: [
            ['https://dortania.github.io/OpenCore-Post-Install/', 'Post-Install'],
	        {
	          title: '',
	          collapsable: false,
	          children: [
	            ['https://dortania.github.io/OpenCore-Post-Install/universal/security', 'Security and FileVault'],
				['https://dortania.github.io/OpenCore-Post-Install/universal/audio', 'Fixing Audio'],
	            ['https://dortania.github.io/OpenCore-Post-Install/universal/oc2hdd', 'Booting without USB'],
				['https://dortania.github.io/OpenCore-Post-Install/universal/update', 'Updating OpenCore, kexts and macOS'],
				['https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock', 'Fixing CFG Lock'],
	            ['https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose', 'Fixing Resolution and Verbose'],
				['https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui', 'Add GUI and Boot-chime'],
				['https://dortania.github.io/OpenCore-Post-Install/universal/drm', 'Fixing DRM'],
	            ['https://dortania.github.io/OpenCore-Post-Install/universal/iservices', 'Fixing iServices'],
				['https://dortania.github.io/OpenCore-Post-Install/misc/nvram', 'Emulated NVRAM'],
	            ['https://dortania.github.io/OpenCore-Post-Install/universal/pm', 'Fixing Power Management'],
				['https://dortania.github.io/OpenCore-Post-Install/universal/sleep', 'Fixing Sleep'],
				['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootstrap', 'Setting up Bootstrap.efi'],
	            ['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp', 'Installing BootCamp'],
				['https://dortania.github.io/USB-Map-Guide/', 'Fixing USB'],
	          ]
	        },
          ]
        },
        {
          title: 'Extras',
          collapsable: true,
          children: [
            '/extras/legacy',
			'/extras/gpu-patches',
			'/extras/kaslr-fix',
			'/extras/spoof',
			'/extras/big-sur/',
			['https://github.com/dortania/OpenCore-Desktop-Guide/tree/master/clover-conversion', 'Clover Conversion'],
          ]
        },
        {
          title: 'Misc',
          collapsable: false,
          children: [
            'CONTRIBUTING',
			'/misc/credit',
          ]
        },
      ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
