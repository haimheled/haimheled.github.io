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
/*    {
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
    },*/

    
               
               
               
               
               
               
               
               
               
               
               
               
               
               


    {category: 'General', name: 'Gmail',     url: 'https://www.gmail.com'},
    {category: 'General', name: 'Facebook',  url: 'https://www.facebook.com'},
    {category: 'General', name: 'Twitter',   url: 'https://www.twitter.com'},
    {category: 'General', name: 'YouTube',   url: 'https://www.youtube.com'},
    {category: 'General', name: 'Spotify',   url: 'https://open.spotify.com'},
    {category: 'General', name: 'Whatsapp',  url: 'https://web.whatsapp.com'},
    {category: 'General', name: 'Google',    url: 'https://www.google.com'},
    
    
//  {category: 'TV & Radio', name: 'Israel Split TV', url: 'http://www.split-tv.co.il/p/il.html'},
    {category: 'TV & Radio', name: 'Split TV',        url: 'https://split-tv.blogspot.com'},	       
    {category: 'TV & Radio', name: 'Kan 11',          url: 'http://www.kan.org.il/live/tv.aspx?stationId=2'},
    {category: 'TV & Radio', name: 'Keshet 12',       url: 'https://www.mako.co.il/mako-vod-live-tv/VOD-6540b8dcb64fd31006.htm'},
    {category: 'TV & Radio', name: 'Reshet 13',       url: 'http://reshet.tv/live/'},
//  {category: 'TV & Radio', name: 'US TV',           url: 'https://ustv247.tv/'},
    {category: 'TV & Radio', name: 'US TV',           url: 'https://tv247.us/all-channels/'},	       
    {category: 'TV & Radio', name: 'Kan B',           url: 'http://rr-d.vidnt.com/player/?stream=radio-betM&account=iba&width=320&height=240&delivery_type=hls&autoplay=true&smil_profile=default'},
    {category: 'TV & Radio', name: 'Galaz',           url: 'http://glzwizzlv.bynetcdn.com/glz_mp3?awCollectionId=misc&awEpisodeId=glz'},
    {category: 'TV & Radio', name: 'Gal Galaz',       url: 'http://glzwizzlv.bynetcdn.com/glglz_mp3?awCollectionId=misc&awEpisodeId=glglz'},
    {category: 'TV & Radio', name: 'TLV Radio',       url: 'http://www.fm1.co.il/102fm.html'},
    {category: 'TV & Radio', name: '88FM',            url: 'http://rr-d.vidnt.com/player/?stream=radio-88fmM&account=iba&width=320&height=240&delivery_type=hls&autoplay=true&smil_profile=default'},


    {category: 'News', name: 'Rotter',       url: 'http://rotter.net/scoopscache.html'},
    {category: 'News', name: 'Ynet',         url: 'http://www.ynet.co.il'},
    {category: 'News', name: 'Walla',        url: 'http://www.walla.co.il'},
    {category: 'News', name: 'Mako',         url: 'http://www.mako.co.il'},
//     {category: 'News', name: 'NRG',          url: 'http://www.nrg.co.il'},
    {category: 'News', name: 'Haaretz',      url: 'http://www.haaretz.co.il'},
    {category: 'News', name: 'News Israel',  url: 'http://www.news-israel.net'},
    {category: 'News', name: 'Israel Today', url: 'http://www.israelhayom.co.il'},
    {category: 'News', name: 'Google News',  url: 'https://news.google.co.il'},
    {category: 'News', name: 'CNN',          url: 'http://www.cnn.com'},
    {category: 'News', name: 'Fox',          url: 'http://www.foxnews.com'},
    {category: 'News', name: 'Tikun Olam',   url: 'https://www.richardsilverstein.com/'},
 
	       
    {category: 'Sport', name: 'Sport5',          url: 'http://www.sport5.co.il'},
    {category: 'Sport', name: 'One',             url: 'http://www.one.co.il'},
    {category: 'Sport', name: 'NBA Games',       url: 'https://www.nba.com/games'},
    // {category: 'Sport', name: 'Wizards Streams', url: 'https://topstreams.info/nba/wizards'},
    {category: 'Sport', name: 'Blazers Streams', url: 'https://topstreams.info/nba/trailblazers'},	       
    {category: 'Sport', name: 'NBA Streams',     url: 'https://nbabite.com'},
    {category: 'Sport', name: 'NBA Replay',      url: 'https://basketball-video.com'}, // url: 'https://nbareplay.net'},

	       
    {category: 'Business', name: 'Globes',     url: 'http://www.globes.co.il'},
    {category: 'Business', name: 'The Marker', url: 'http://www.themarker.co.il'},
    {category: 'Business', name: 'Calcalist',  url: 'http://www.calcalist.co.il'},
    
    {category: 'Finance', name: 'Mizrahi Bank',   url: 'https://www.mizrahi-tefahot.co.il/login/bv5x83ut/index.html#/auth-page-he'},
    {category: 'Finance', name: 'Discount Bank',  url: 'https://start.telebank.co.il/login/#/LOGIN_PAGE'},
    {category: 'Finance', name: 'Exchange Rates', url: 'http://www.boi.org.il/he/Markets/ExchangeRates/Pages/Default.aspx'},
    {category: 'Finance', name: 'Visa Cal',           url: 'https://services.cal-online.co.il/Card-Holders/SCREENS/AccountManagement/Login.aspx?ReturnUrl=%2fcard-holders%2fScreens%2fAccountManagement%2fHomePage.aspx'},
    

    {category: 'Shopping', name: 'Israel Post', url: 'https://israelpost.co.il/%d7%a9%d7%99%d7%a8%d7%95%d7%aa%d7%99%d7%9d/%d7%94%d7%97%d7%91%d7%99%d7%9c%d7%95%d7%aa-%d7%a9%d7%9c%d7%99/'},
    {category: 'Shopping', name: 'Reut Buy',    url: 'https://reutbuyitforme.com'},
    {category: 'Shopping', name: 'Ali Buy',     url: 'https://ali-buy.com'},
    {category: 'Shopping', name: 'I Need It',   url: 'https://ineedit.co.il'},
    {category: 'Shopping', name: 'Rami Levy',   url: 'https://www.rami-levy.co.il'},
    {category: 'Shopping', name: 'Wolt',        url: 'https://wolt.com'},
    {category: 'Shopping', name: 'Ali Express', url: 'https://www.aliexpress.com/?lan=en'},
    {category: 'Shopping', name: 'Amazon',      url: 'https://www.amazon.com'},	       

    {category: 'Health', name: 'Clalit', url: 'https://e-services.clalit.org.il/onlineweb/general/login.aspx'},


    {category: 'Utilities', name: 'Babylon',       url: 'http://online.babylon.com/trans_box/myindex.php?lang=EN&affiliate=CD1'},
    {category: 'Utilities', name: 'Quick Email',   url: 'https://nospam.today'},
    {category: 'Utilities', name: 'Wikipedia',     url: 'https://he.wikipedia.org'},
    {category: 'Utilities', name: 'IP Address',    url: 'https://ipecho.net/plain'},
    {category: 'Utilities', name: 'IP Location',   url: 'https://iplocation.com/'},
    {category: 'Utilities', name: 'Speed Test',    url: 'http://www.speedtest.net'},
    {category: 'Utilities', name: 'Google',        url: 'https://www.google.com'},
    {category: 'Utilities', name: 'Duckduckgo',    url: 'https://duckduckgo.com/'},
    {category: 'Utilities', name: 'Bing',          url: 'https://www.bing.com/'},
    {category: 'Utilities', name: 'ChatGPT',       url: 'https://chat.openai.com/auth/login'},
    {category: 'Utilities', name: 'GPT Playground',url: 'https://beta.openai.com/playground'},    
    {category: 'Utilities', name: 'Claude',        url: 'https://claude.ai/onboarding'},    
    {category: 'Utilities', name: 'Remote Access', url: 'https://150.co.il'},
    {category: 'Utilities', name: 'PC Builder',    url: 'https://pcpartpicker.com'},
    {category: 'Utilities', name: 'Gemini',        url: 'https://gemini.google.com/'},
    {category: 'Utilities', name: 'True Caller',   url: 'https://www.truecaller.com/'},
    {category: 'Utilities', name: 'Drum Machine',  url: 'https://www.virtualdrumming.com/drums/virtual-drum-machine-online/drum-machine-online-free.html'},
	       
	       
//     {category: 'Utilities', name: 'novnc',          url: 'http://ivory:6080/vnc.html?host=ivory&port=6080'},
//     {category: 'Utilities', name: 'IP Address',    url: 'ifconfig.me'},
//     {category: 'Utilities', name: 'IP Location',   url: 'https://www.iplocation.net/'},

    
    {category: 'Development', name: 'Github Edit',     url: 'https://github.com/haimheled/haimheled.github.io/edit/master/js/config.js'},
    {category: 'Development', name: 'Github Page',     url: 'https://github.com/haimheled/haimheled.github.io'},
    {category: 'Development', name: 'Github Edit Old', url: 'https://github.com/haimheled/haimheled.github.io/blob/master/startpage.rwrt.old_site/index.html'},
    {category: 'Development', name: 'EDA Playground',  url: 'https://www.edaplayground.com'},
    {category: 'Development', name: 'Appimage',  url: 'https://github.com/AppImageCommunity/awesome-appimage'},
	       

	       
    {category: 'Bills', name: '012 Mobile',    url: 'https://www.012mobile.co.il/n/login'},
    {category: 'Bills', name: '019 Mobile',    url: 'https://019mobile.co.il/userarea/'},
    {category: 'Bills', name: 'ISP & Landline',    url: 'https://bmy.bezeq.co.il/'},
//     {category: 'Bills', name: 'ISP & Phone', url: 'https://www.hot.net.il/heb/SelfService/Login'},
//     {category: 'Bills', name: 'ISP content', url: 'https://www.hotnet.net.il'},
    {category: 'Bills', name: 'Credit Card', url: 'https://www.cal-online.co.il'},
    {category: 'Bills', name: 'Super Gas',   url: 'http://sgas.co.il'},
    {category: 'Bills', name: 'Water',       url: 'https://www.mast.co.il/101/mail-invoice'},
    {category: 'Bills', name: 'City Tax',    url: 'https://www.ramat-gan.muni.il/waterbillsubscribe'},
    {category: 'Bills', name: 'Electricity', url: 'https://www.iec.co.il'},


    {category: 'Stocks', name: 'Inter IL Portal',url: 'https://www.clientam.com/sso/Login?partnerID=Inter_il'},
    {category: 'Stocks', name: 'Inter IL',url: 'https://www.inter-il.com'},
    {category: 'Stocks', name: 'IBI NextGen',url: 'https://ibi.orbisfn.io/login'},
    {category: 'Stocks', name: 'IBI Spark',  url: 'https://sparkibi.ordernet.co.il/#/auth'},
    {category: 'Stocks', name: 'Trading View',  url: 'https://www.tradingview.com/screener/'},
    {category: 'Stocks', name: 'Investing',  url: 'https://www.investing.com'},
    {category: 'Stocks', name: 'Trade Economics',  url: 'https://tradingeconomics.com/calendar'},
    // {category: 'Stocks', name: '24H Trading',  url: 'https://robinhood.com/us/en/stocks/TSLA/'},
    {category: 'Stocks', name: '24H Trading',  url: 'https://robinhood.com/lists/custom/94897901-821e-4de9-a108-8636032dd3b2'},
    {category: 'Stocks', name: 'Extrade Pro',  url: 'https://extradepro.xnes.co.il/login'},
    {category: 'Stocks', name: 'Earnings Whisper',  url: 'https://www.reddit.com/r/EarningsWhisper'},
    {category: 'Stocks', name: 'Market Cap',  url: 'https://companiesmarketcap.com'},
    {category: 'Stocks', name: 'Bizportal',  url: 'https://www.bizportal.co.il'},
    {category: 'Stocks', name: 'Funder',  url: 'https://www.funder.co.il'},
    {category: 'Stocks', name: 'S&P 500 YTD',  url: 'https://www.slickcharts.com/sp500/returns/ytd'},
    {category: 'Stocks', name: 'Portfolio Visual',  url: 'https://www.portfoliovisualizer.com/backtest-portfolio?action=open'},
    {category: 'Stocks', name: 'eToro',  url: 'https://www.etoro.com/watchlists'},
    {category: 'Stocks', name: 'Finviz',  url: 'https://finviz.com/screener.ashx'},
    {category: 'Stocks', name: 'Bilello Blog',  url: 'https://bilello.blog/2024/the-week-in-charts-11-13-24'},

	       
	       
	       
	       

    {category: 'Renesas', name: 'Portal',        url: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__renesasgroup.sharepoint.com_sites_GIPen&d=DwMFAg&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=UwQdxjYfFiaTT2Adbb4SkV5eaLla8cQDERLmGpwUsXM&m=sjsiFNIloFkDZSS7YbIl_lvjnK7-laA3IhuC8HqK3Eg&s=4Kqhc4V8ADEctMewZo2ovz_tkInA2Hj3KO5aRWPhaQk&e='},
    {category: 'Renesas', name: 'Service Portal',url: 'https://globalserviceportal.renesas.com/esc'},
    {category: 'Renesas', name: 'Renesas Exceed',url: 'https://sl-etx.diasemi.com'},
    {category: 'Renesas', name: 'Confluence',    url: 'https://confluence.renesas.com/display/Rubium/RF+Multiplexer+-+RFMux'},
    {category: 'Renesas', name: 'Mail',          url: 'https://outlook.office365.com/mail/inbox'},
    {category: 'Renesas', name: 'Calendar',      url: 'https://outlook.office365.com/calendar/view/month'},
    {category: 'Renesas', name: 'Teams',         url: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__teams.microsoft.com_&d=DwMFAg&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=UwQdxjYfFiaTT2Adbb4SkV5eaLla8cQDERLmGpwUsXM&m=sjsiFNIloFkDZSS7YbIl_lvjnK7-laA3IhuC8HqK3Eg&s=ZI48vGgauYmwc5Z8e3P34MCT2xW3toYIFT_1sk_j0Hs&e='},
    {category: 'Renesas', name: 'Goals',         url: 'https://jpn01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fperformancemanager5.successfactors.eu%2Flogin%3Fcompany%3Drenesasele%23%2Flogin&data=04%7C01%7Chaim.heled.ks%40renesas.com%7C7af5adfd98474c88f47908da1bb4846e%7C53d82571da1947e49cb4625a166a4a2a%7C0%7C0%7C637852759489302374%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=IQYFM7WPoibj9WREZs0bm6vpH5TYLh%2F%2B2NsERq5tEK0%3D&reserved=0'},
    {category: 'Renesas', name: 'Auth Setup',    url: 'https://aka.ms/mfasetup'},
    {category: 'Renesas', name: 'SVN Project',   url: 'http://172.25.90.250/svn/celeno-sys/Project'},
    {category: 'Renesas', name: 'SVN Personal',  url: 'http://172.25.90.250/svn/celeno-people/haim.heled'},
    {category: 'Renesas', name: 'SharePoint',    url: 'https://renesasgroup.sharepoint.com/sites/CelenoRnD'},
    {category: 'Renesas', name: 'Cibus',         url: 'http://www.mysodexo.co.il'},
    {category: 'Renesas', name: 'Tasks',         url: 'https://tasks.office.com/celeno.com/en-US/Home/Planner/#/mytasks'},
    {category: 'Renesas', name: 'Soc CL3000B',   url: 'http://172.26.30.84/soc-cl3000_b0/soconline/app/index.cgi?'},
    {category: 'Renesas', name: 'Soc CL6000',    url: 'http://172.26.30.84/soc-cl6000/soconline/app/index.cgi?'},
    {category: 'Renesas', name: 'Soc CL6000B',   url: 'http://172.26.30.84/soc-cl6000_b0/soconline/app/index.cgi?'},
    {category: 'Renesas', name: 'Soc CL7000',    url: 'http://slocelsoc001p.adwin.renesas.com/soc-cl7000_a0/soconline/app/login.cgi?'},
    {category: 'Renesas', name: 'Wiki IP list',  url: 'http://172.25.90.250/wiki/index.php/Palladium_Protium_IPs'},
    {category: 'Renesas', name: 'Jira',          url: 'https://celeno.atlassian.net/jira/software/c/projects/AD/issues/?filter=myopenissues'},
//     {category: 'Renesas', name: 'Jira',          url: 'https://celeno.atlassian.net/issues/?filter=10368'},
    {category: 'Renesas', name: 'Matlab',        url: 'http://172.25.90.250/svn/celeno-sys/Project/CL3000/Algo/MatlabRelease/distrib/'},
    {category: 'Renesas', name: 'DSP',           url: 'http://172.25.90.250/svn/dsp/code/Everest_A0/build'},
    {category: 'Renesas', name: 'Documents',     url: 'http://172.25.90.250/svn/celeno-sys/Project/CL3000/MAC%20Documents/'},
    {category: 'Renesas', name: 'Hours Report',  url: 'https://harmony.synel.co.il/eharmonynew'},
    {category: 'Renesas', name: 'Exceed',        url: 'https://192.168.13.65/etx'},
    {category: 'Renesas', name: 'Exceed Old',    url: 'https://172.29.149.65/etx'},
    {category: 'Renesas', name: 'ADP',    url: 'https://portal.people.adp.com'},
    {category: 'Renesas', name: 'Service Desk',    url: 'https://renesas.service-now.com'}, 	       
    {category: 'Renesas', name: 'IPMI edk-4171', url: 'http://172.18.3.44/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI edk-4172', url: 'http://172.18.3.34/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI edk-4173', url: 'http://172.18.3.52/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI edk-4174', url: 'http://172.18.3.38/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI edk-4175', url: 'http://172.18.3.42/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI edk-4177', url: 'http://172.18.3.41/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI edk-4178', url: 'http://172.18.3.46/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'IPMI edk-4179', url: 'http://172.18.3.50/cgi/url_redirect.cgi?url_name=man_chassis'},
    {category: 'Renesas', name: 'Redwood Matlab',url: 'http://moon/svn/celeno-algo/docs/AX/Docs/Algo/TFU/HW%20Modem%20-%20Rx%20TFU%20TD%20Processing%20-%20HW%20Spec.docx'},
    {category: 'Renesas', name: 'REL Systems',url: 'https://renesasgroup.sharepoint.com/sites/REL-portal/ISD_SYSTEM/SitePages/REL%20Systems.aspx'},






/*

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
    },*/
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
//     {
//       name: 'DuckDuckGo',
//       limit: 4
//     },
    {
      name: 'Google',
      limit: 10 // 4
    },
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
