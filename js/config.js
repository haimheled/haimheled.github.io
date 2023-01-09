const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
//   commands: [{
//       name: 'Duckduckgo',
//       key: '*',
//       url: 'https://duckduckgo.com',
//       search: '/?q={}'
//     },
    commands: [{
      name: 'Google',
      key: '*',
      url: 'https://google.com',
      search: '/search?q={}'
    },
    {
      category: 'General',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Telegram',
      key: 'tg',
      url: 'https://web.telegram.org',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'WhatsApp',
      key: 'w',
      url: 'https://web.whatsapp.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Discord',
      key: 'dc',
      url: 'https://discord.com/app',
      color: '#7289da',
      icon: 'discord',
      quickLaunch: false,
    },

    {category: 'Development', name: 'Github Page', url: 'https://github.com/haimheled/haimheled.github.io'},
    {category: 'Development', name: 'Github Edit', url: 'https://github.com/haimheled/haimheled.github.io/edit/master/js/config.js'},
    {category: 'Development', name: 'Github Edit Old', url: 'https://github.com/haimheled/haimheled.github.io/blob/master/startpage.rwrt.old_site/index.html'},

    {category: 'Renesas', name: 'Auth Setup', url: 'https://aka.ms/mfasetup'},
    {category: 'Renesas', name: 'Portal', url: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__renesasgroup.sharepoint.com_sites_GIPen&d=DwMFAg&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=UwQdxjYfFiaTT2Adbb4SkV5eaLla8cQDERLmGpwUsXM&m=sjsiFNIloFkDZSS7YbIl_lvjnK7-laA3IhuC8HqK3Eg&s=4Kqhc4V8ADEctMewZo2ovz_tkInA2Hj3KO5aRWPhaQk&e='},
    {category: 'Renesas', name: 'Outlook', url: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__outlook.office365.com&d=DwMFAg&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=UwQdxjYfFiaTT2Adbb4SkV5eaLla8cQDERLmGpwUsXM&m=sjsiFNIloFkDZSS7YbIl_lvjnK7-laA3IhuC8HqK3Eg&s=YXBYvu9e3QrWTqN_1ad8BxlxgL2Lb_r0Coy94S80pzQ&e='},
    {category: 'Renesas', name: 'Teams', url: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__teams.microsoft.com_&d=DwMFAg&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=UwQdxjYfFiaTT2Adbb4SkV5eaLla8cQDERLmGpwUsXM&m=sjsiFNIloFkDZSS7YbIl_lvjnK7-laA3IhuC8HqK3Eg&s=ZI48vGgauYmwc5Z8e3P34MCT2xW3toYIFT_1sk_j0Hs&e='},           
    {category: 'Renesas', name: 'Goals', url: 'https://jpn01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fperformancemanager5.successfactors.eu%2Flogin%3Fcompany%3Drenesasele%23%2Flogin&data=04%7C01%7Chaim.heled.ks%40renesas.com%7C7af5adfd98474c88f47908da1bb4846e%7C53d82571da1947e49cb4625a166a4a2a%7C0%7C0%7C637852759489302374%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=IQYFM7WPoibj9WREZs0bm6vpH5TYLh%2F%2B2NsERq5tEK0%3D&reserved=0'}, 
    {category: 'Renesas', name: 'Mail',          url: 'https://outlook.office365.com/mail/inbox'},
    {category: 'Renesas', name: 'Calendar',      url: 'https://outlook.office365.com/calendar/view/month'},
    {category: 'Renesas', name: 'SVN Project',   url: 'http://172.25.90.250/svn/celeno-sys/Project'},
    {category: 'Renesas', name: 'SVN Personal',  url: 'http://172.25.90.250/svn/celeno-people/haim.heled'},
    {category: 'Renesas', name: 'Cibus',         url: 'http://www.mysodexo.co.il'},
    {category: 'Renesas', name: 'Tasks',         url: 'https://tasks.office.com/celeno.com/en-US/Home/Planner/#/mytasks'},
    {category: 'Renesas', name: 'Soc CL6000	',   url: 'http://172.26.30.84/soc-cl6000/soconline/app/index.cgi?'},
    {category: 'Renesas', name: 'Soc CL3000 B',  url: 'http://172.26.30.84/soc-cl3000_b0/soconline/app/index.cgi?'},
    {category: 'Renesas', name: 'Wiki IP list',  url: 'http://172.25.90.250/wiki/index.php/Palladium_Protium_IPs'},
    {category: 'Renesas', name: 'Jira',          url: 'https://celeno.atlassian.net/issues/?filter=10368'},
    {category: 'Renesas', name: 'Matlab',        url: 'http://172.25.90.250/svn/celeno-sys/Project/CL3000/Algo/MatlabRelease/distrib/'},
    {category: 'Renesas', name: 'DSP',           url: 'http://172.25.90.250/svn/dsp/code/Everest_A0/build'},
    {category: 'Renesas', name: 'Office',        url: 'https://www.office.com/'},
    {category: 'Renesas', name: 'Documents',     url: 'http://172.25.90.250/svn/celeno-sys/Project/CL3000/MAC%20Documents/'},
    {category: 'Renesas', name: 'Hours Report',  url: 'https://harmony.synel.co.il/eharmonynew'},
    {category: 'Renesas', name: 'Exceed',        url: 'https://172.29.149.65/etx'},
    {category: 'Renesas', name: 'EDA Play',      url: 'https://www.edaplayground.com'},
    {category: 'Renesas', name: 'IPMI EDK-4171', url: 'http://172.18.3.44/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI EDK-4172', url: 'http://172.18.3.34/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI EDK-4173', url: 'http://172.18.3.52/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI EDK-4174', url: 'http://172.18.3.38/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI EDK-4175', url: 'http://172.18.3.42/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI EDK-4177', url: 'http://172.18.3.41/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI EDK-4178', url: 'http://172.18.3.46/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI EDK-4179', url: 'http://172.18.3.50/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'Soc CL2400',    url: 'http://10.220.220.201/soc-cl2400_b0/soconline/app/'},
    {category: 'Renesas', name: 'Soc CL3000',    url: 'http://10.220.220.201/soc-cl3000/soconline/app/'}, 





























       

               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               


    {
      category: 'GeneraHHH', name: 'Drive', url: 'https://drive.google.com',
    },
    {
      category: 'Genera',
      name: 'Telegram',
      key: 'tg',
      url: 'https://web.telegram.org',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'Genera',
      name: 'WhatsApp',
      key: 'w',
      url: 'https://web.whatsapp.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'Genera',
      name: 'Discord',
      key: 'dc',
      url: 'https://discord.com/app',
      color: '#7289da',
      icon: 'discord',
      quickLaunch: false,
    },










































    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'StackOverflow',
      key: 'st',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'HackerNews',
      key: 'h',
      url: 'https://news.ycombinator.com/',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'hackernews',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'MDN',
      key: 'md',
      url: 'https://developer.mozilla.org/en-US',
      search: '/search?q={}',
      color: '#212121',
      icon: 'mdn',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'DevDocs',
      key: 'dd',
      url: 'https://devdocs.io',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'devdocs',
      quickLaunch: false,
    },


    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Netflix',
      key: 'n',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Spotify',
      key: 's',
      url: 'https://open.spotify.com/',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'spotify',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Twitch',
      key: 'tw',
      url: 'https://www.twitch.tv',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch',
      quickLaunch: false,
    },


    {
      category: 'Other',
      name: 'Twitter',
      key: 't',
      url: 'https://www.twitter.com',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Instagram',
      key: 'i',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Notion',
      key: 'ns',
      url: 'https://www.notion.so',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'notion',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Translate',
      key: 'tr',
      url: 'https://translate.google.com/',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 10,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [/*{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },*/
     {
       name: 'DuckDuckGo',
       limit: 10 // 4
     },
//    {
//      name: 'Google',
//      limit: 10 // 4
//    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: false,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
