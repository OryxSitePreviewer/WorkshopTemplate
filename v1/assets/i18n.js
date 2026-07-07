/*
  MDS Autowork — shared UI helpers used by all design versions (root/v1, v2, v3):
    1) Back-to-top button (appears after scrolling down)
    2) Language switch: English <-> casual Malay (bahasa santai)

  The Malay switch works by walking visible text nodes and swapping any that
  match a key in DICT (normalised, whitespace-collapsed). Anything without a
  translation simply stays in English, so it degrades gracefully. Brand names,
  numbers and phone numbers are intentionally left as-is.
*/
(function () {
  var STAR = '★', MID = '·', NDASH = '–';

  // English (normalised) -> casual Malay
  var DICT = {
    // Nav / header / global
    'Skip to main content': 'Terus ke kandungan',
    'Services': 'Servis',
    'Why Us': 'Kenapa Kami',
    'Free Pickup': 'Pickup Percuma',
    'Reviews': 'Review',
    'Location': 'Lokasi',
    'Contact': 'Hubungi',
    'Book on WhatsApp': 'Book Kat WhatsApp',
    'Book Now': 'Book Sekarang',
    'Book': 'Book',

    // Hero (root/v1)
    'Serving Kajang, Bangi, Semenyih & surrounding Selangor': 'Area Kajang, Bangi, Semenyih & sekitar Selangor',
    'Honest Car Service & Repair in Selangor': 'Servis & Baiki Kereta Jujur di Selangor',
    'From minor & major servicing to aircond, diagnosis and full engine overhauls, all handled by mechanics with': 'Dari servis minor & major sampai aircond, diagnosis dan overhaul enjin penuh, semua dibuat oleh mekanik dengan',
    '8+ years of hands-on experience': '8+ tahun pengalaman tangan sendiri',
    ', using original parts.': ', guna alat ganti ori.',
    'Rated 4.9★ on Google.': 'Dapat 4.9★ kat Google.',
    '4.9 · Google Reviews': '4.9 · Review Google',
    'Our Services': 'Servis Kami',
    'Prefer to call?': 'Nak call terus?',
    'Trusted since 2020': 'Dipercayai sejak 2020',
    'Original & quality parts': 'Alat ganti ori & berkualiti',
    'Free home pickup': 'Pickup rumah percuma',

    // Hero (v2 split headline)
    'Your car,': 'Kereta anda,',
    'in': 'di',
    'honest': 'tangan yang',
    'hands.': 'jujur.',
    // Hero (v3)
    'Open · Taman Kajang Utama, Selangor': 'Buka · Taman Kajang Utama, Selangor',
    'Precision car care,': 'Servis kereta terperinci,',
    'done right.': 'buat betul-betul.',
    'Servicing, aircond, diagnosis and engine work by mechanics with 8+ years of experience. Original parts, fair prices, and free home pickup. Trusted since 2020.': 'Servis, aircond, diagnosis dan kerja enjin oleh mekanik dengan 8+ tahun pengalaman. Alat ganti ori, harga berpatutan, dan pickup rumah percuma. Dipercayai sejak 2020.',
    '4.9 on Google': '4.9 kat Google',

    // Stats
    'Google rating': 'Rating Google',
    'Trusted since': 'Dipercayai sejak',
    'Years experience': 'Tahun pengalaman',
    'Home pickup fee': 'Caj pickup rumah',
    'Home pickup': 'Pickup rumah',

    // Services
    'Our services': 'Servis kami',
    'What we do': 'Apa kami buat',
    'Complete car care under one roof': 'Semua servis kereta bawah satu bumbung',
    'Complete car care': 'Servis kereta lengkap',
    "Whether it's a routine service or a major overhaul, our experienced team keeps you safely on the road, for all makes and models.": 'Sama ada servis biasa atau overhaul besar, team kami pastikan kereta anda selamat di jalan, untuk semua jenis dan model.',
    'Whether it is a quick service or a major overhaul, our team keeps you safely on the road, for all makes and models.': 'Sama ada servis cepat atau overhaul besar, team kami pastikan anda selamat di jalan, untuk semua jenis dan model.',
    'Quick service or major overhaul, our team keeps you safely on the road, for all makes and models.': 'Servis cepat atau overhaul besar, team kami pastikan anda selamat di jalan, untuk semua jenis dan model.',
    'Minor & Major Servicing': 'Servis Minor & Major',
    'Aircond Specialist': 'Pakar Aircond',
    '(Repair & Service)': '(Baiki & Servis)',
    'Vehicle Diagnosis & Inspection': 'Diagnosis & Pemeriksaan Kereta',
    'Transmission & Engine Overhaul': 'Overhaul Transmisi & Enjin',
    'Scheduled maintenance to keep your car running smoothly and protect its resale value.': 'Servis berjadual supaya kereta smooth dan jaga nilai jual semula.',
    'Engine oil & filter replacement': 'Tukar minyak hitam & filter',
    'Brakes, belts, batteries & filters': 'Brek, tali sawat, bateri & filter',
    'Full multi-point safety check': 'Pemeriksaan keselamatan penuh',
    'Beat the Malaysian heat. We diagnose and fix weak or warm air-conditioning at the root cause.': 'Lawan panas Malaysia. Kami cari dan baiki punca aircond tak sejuk.',
    'Aircond servicing & gas top-up': 'Servis aircond & tambah gas',
    'Compressor, cooling coil & blower repair': 'Baiki compressor, cooling coil & blower',
    'Leak detection & odour treatment': 'Kesan bocor & hilangkan bau',
    'Computerised scanning to pinpoint the real problem fast. No guesswork, no unnecessary parts.': 'Scan komputer untuk cari masalah sebenar cepat. Tak main agak, tak tukar barang tak perlu.',
    'Check-engine & warning-light scanning': 'Scan check-engine & lampu amaran',
    'Pre-purchase & used-car inspection': 'Check sebelum beli & kereta second-hand',
    'Honest report before any work begins': 'Laporan jujur sebelum mula kerja',
    "Major repair work handled with care by mechanics who have done it for years, restoring your car's power and reliability.": 'Kerja repair besar dijaga rapi oleh mekanik berpengalaman, pulihkan kuasa dan ketahanan kereta anda.',
    'Engine rebuild & overhaul': 'Rebuild & overhaul enjin',
    'Auto & manual transmission repair': 'Baiki transmisi auto & manual',
    'Original & high-quality replacement parts': 'Alat ganti ori & berkualiti tinggi',
    "Not sure what your car needs? Send us a photo or describe the problem and we'll be happy to advise.": 'Tak pasti kereta anda perlu apa? Hantar gambar atau cerita masalah, kami tolong nasihat.',
    'Ask us on WhatsApp': 'Tanya Kami Kat WhatsApp',
    // v2 long service descriptions
    'Scheduled maintenance that keeps your car running smoothly and protects its resale value. Engine oil and filter, brakes, belts, batteries, and a full multi-point safety check.': 'Servis berjadual yang buat kereta anda smooth dan jaga nilai jual semula. Minyak hitam dan filter, brek, tali sawat, bateri, dan pemeriksaan keselamatan penuh.',
    'Beat the Malaysian heat. We diagnose and fix weak or warm air-conditioning at the root cause. Servicing and gas top-up, compressor and cooling coil repair, leak detection and odour treatment.': 'Lawan panas Malaysia. Kami cari dan baiki punca aircond tak sejuk. Servis dan tambah gas, baiki compressor dan cooling coil, kesan bocor dan hilangkan bau.',
    'Computerised scanning to pinpoint the real problem fast. No guesswork, no unnecessary parts. Check-engine and warning-light scanning, pre-purchase inspection, and an honest report before any work begins.': 'Scan komputer untuk cari masalah sebenar cepat. Tak main agak, tak tukar barang tak perlu. Scan check-engine dan lampu amaran, check sebelum beli, dan laporan jujur sebelum mula kerja.',
    "Major repair work handled with care by mechanics who have done it for years, restoring your car's power and reliability. Engine rebuild, auto and manual transmission repair, with original and high-quality parts.": 'Kerja repair besar dijaga rapi oleh mekanik berpengalaman, pulihkan kuasa dan ketahanan kereta. Rebuild enjin, baiki transmisi auto dan manual, dengan alat ganti ori dan berkualiti.',
    // v3 service descriptions
    'Scheduled maintenance to keep your car smooth and reliable. Oil and filter, brakes, belts, batteries, and a full multi-point safety check.': 'Servis berjadual supaya kereta smooth dan boleh harap. Minyak hitam dan filter, brek, tali sawat, bateri, dan pemeriksaan keselamatan penuh.',
    'We fix weak or warm air-conditioning at the root cause. Servicing and gas top-up, compressor and cooling coil repair, leak detection and odour treatment.': 'Kami baiki punca aircond tak sejuk. Servis dan tambah gas, baiki compressor dan cooling coil, kesan bocor dan hilangkan bau.',
    'Computerised scanning to pinpoint the real problem fast. No guesswork. Warning-light scanning, pre-purchase inspection, and an honest report before any work.': 'Scan komputer untuk cari masalah sebenar cepat. Tak main agak. Scan lampu amaran, check sebelum beli, dan laporan jujur sebelum kerja.',
    'Major repair work by mechanics who have done it for years, restoring power and reliability. Engine rebuild, auto and manual transmission, original parts.': 'Kerja repair besar oleh mekanik berpengalaman, pulihkan kuasa dan ketahanan. Rebuild enjin, transmisi auto dan manual, alat ganti ori.',

    // Why us
    'Why choose us': 'Kenapa pilih kami',
    'A workshop drivers genuinely trust': 'Bengkel yang pemandu betul-betul percaya',
    'has been serving drivers across Selangor': 'dah bagi servis kat pemandu seluruh Selangor',
    'since 2020': 'sejak 2020',
    '. We keep your car safe and reliable with straight talk, dependable workmanship and fair prices. We treat every vehicle as if it were our own.': '. Kami jaga kereta anda selamat dan boleh harap, dengan cakap terus terang, kerja berkualiti dan harga berpatutan. Kami jaga setiap kereta macam kereta sendiri.',
    'Serving drivers across Selangor since 2020, with straight talk and dependable workmanship. We treat every vehicle as if it were our own.': 'Bagi servis kat pemandu seluruh Selangor sejak 2020, dengan cakap terus terang dan kerja boleh harap. Kami jaga setiap kereta macam kereta sendiri.',
    'Serving drivers across Selangor since 2020. We treat every vehicle as if it were our own.': 'Bagi servis kat pemandu seluruh Selangor sejak 2020. Kami jaga setiap kereta macam kereta sendiri.',
    'Straight talk. Solid work.': 'Cakap terus. Kerja mantap.',
    '8+ years of experience': '8+ tahun pengalaman',
    '8+ years experience': '8+ tahun pengalaman',
    'Seasoned mechanics who have seen and fixed it all, from quick jobs to major overhauls.': 'Mekanik berpengalaman yang dah nampak dan baiki macam-macam, dari kerja cepat sampai overhaul besar.',
    'Seasoned mechanics, from quick jobs to major overhauls.': 'Mekanik berpengalaman, dari kerja cepat sampai overhaul besar.',
    'Original & high-quality parts': 'Alat ganti ori & berkualiti tinggi',
    'Original & quality parts (2)': '',
    'Original parts': 'Alat ganti ori',
    'We fit genuine and quality-grade spare parts that last. No cheap shortcuts.': 'Kami pasang alat ganti ori dan berkualiti yang tahan lama. Tak main jalan pintas murah.',
    'Genuine and quality-grade parts that last. No cheap shortcuts.': 'Alat ganti ori dan berkualiti yang tahan lama. Tak main jalan pintas murah.',
    'Parts that last. No cheap shortcuts.': 'Alat ganti yang tahan lama. Tak main jalan pintas murah.',
    'Reasonable, transparent pricing': 'Harga berpatutan & telus',
    'Fair pricing': 'Harga berpatutan',
    'Clear quotes up front, so there are no surprises at the counter.': 'Harga jelas dari awal, jadi takde kejutan masa nak bayar.',
    'Clear quotes up front. No surprises at the counter.': 'Harga jelas dari awal. Takde kejutan masa bayar.',
    "Too busy to drop off? We'll collect your car from home, free of charge.": 'Sibuk nak hantar? Kami ambil kereta anda dari rumah, percuma.',
    'Too busy to drop off? We collect your car, free of charge.': 'Sibuk nak hantar? Kami ambil kereta anda, percuma.',
    "We'll collect your car from home, free of charge.": 'Kami ambil kereta anda dari rumah, percuma.',
    'We collect your car from home, free of charge.': 'Kami ambil kereta anda dari rumah, percuma.',
    'Google Reviews': 'Review Google',
    'out of 5 stars': 'daripada 5 bintang',
    'Rated': 'Dapat',
    '4.9★ by happy customers': '4.9★ dari pelanggan puas hati',
    'across Selangor for honest advice, quality work and fair prices.': 'seluruh Selangor sebab nasihat jujur, kerja berkualiti dan harga berpatutan.',

    // Free pickup
    "Too busy to drop off your car? We'll come to you.": 'Sibuk sangat nak hantar kereta? Kami datang jumpa anda.',
    'Too busy to drop off? We come to you.': 'Sibuk nak hantar? Kami datang jumpa anda.',
    'Too busy? We come to you.': 'Sibuk? Kami datang jumpa anda.',
    'Skip the hassle. Just WhatsApp us your location and preferred time. Our team will collect your car, service it at our workshop, and keep you updated every step of the way.': 'Tak payah susah. WhatsApp je lokasi dan masa yang sesuai. Team kami akan ambil kereta anda, servis kat bengkel, dan update anda setiap langkah.',
    'Just WhatsApp us your location and preferred time. We collect your car, service it at our workshop, and keep you updated until it is ready. No extra charge.': 'WhatsApp je lokasi dan masa yang sesuai. Kami ambil kereta anda, servis kat bengkel, dan update sampai siap. Tanpa caj tambahan.',
    'WhatsApp your location and preferred time. We collect your car, service it, and keep you updated until it is ready. No extra charge.': 'WhatsApp lokasi dan masa yang sesuai. Kami ambil kereta, servis, dan update sampai siap. Tanpa caj tambahan.',
    'No extra charge.': 'Tanpa caj tambahan.',
    'Free collection from your home. No charge.': 'Ambil dari rumah percuma. Takde caj.',
    'Clear quote sent to you before any work starts.': 'Harga jelas dihantar sebelum kerja bermula.',
    'Updates by WhatsApp until your car is ready.': 'Update melalui WhatsApp sampai kereta anda siap.',
    'Arrange a free pickup': 'Atur Pickup Percuma',
    'Arrange a pickup': 'Atur Pickup',
    'How it works': 'Macam mana ia jalan',
    'Message us on WhatsApp': 'WhatsApp kami',
    'Tell us the problem, your address and a convenient time.': 'Bagitau masalah, alamat dan masa yang sesuai.',
    'Tell us the problem, your address and a time.': 'Bagitau masalah, alamat dan masa.',
    'We collect your car, free of charge': 'Kami ambil kereta anda, percuma',
    'We collect your car, free': 'Kami ambil kereta, percuma',
    'Our team picks it up from your home at a time that suits you.': 'Team kami ambil dari rumah pada masa yang anda selesa.',
    'Our team picks it up at a time that suits you.': 'Team kami ambil pada masa yang anda selesa.',
    'Picked up at a time that suits you.': 'Diambil pada masa yang anda selesa.',
    'We diagnose & quote': 'Kami diagnosis & bagi harga',
    'Diagnose, quote, repair': 'Diagnosis, harga, baiki',
    'You approve a clear price before any work begins.': 'Anda setuju harga jelas sebelum kerja bermula.',
    'You approve a clear price before work begins.': 'Anda setuju harga jelas sebelum kerja bermula.',
    'Car ready & returned': 'Kereta siap & dihantar balik',
    'Car ready and returned': 'Kereta siap & dihantar balik',
    'We finish the job and let you know your car is ready.': 'Kami siapkan kerja dan bagitau bila kereta dah ready.',
    'We finish the job and let you know it is ready.': 'Kami siapkan kerja dan bagitau bila dah ready.',
    'We finish the job and let you know.': 'Kami siapkan kerja dan bagitau anda.',

    // Reviews
    'What customers say': 'Kata pelanggan',
    'Kind words': 'Kata-kata baik',
    'Rated 4.9★ by our customers': 'Dapat 4.9★ dari pelanggan kami',
    '4.9 / 5 on Google': '4.9 / 5 kat Google',
    '4.9 · 86 Google reviews': '4.9 · 86 review Google',
    '4.9 / 5 · 86 Google reviews': '4.9 / 5 · 86 review Google',
    '4.9 · 86 Google reviews · Since 2020': '4.9 · 86 review Google · Sejak 2020',
    'Read our reviews on Google': 'Baca review kami kat Google',
    'Read reviews on Google': 'Baca review kat Google',

    // Our work / gallery
    'Our Work': 'Kerja Kami',
    'Our work': 'Kerja kami',
    'Real jobs from our workshop': 'Kerja sebenar dari bengkel kami',
    'A look at some of the servicing and repairs we handle every day.': 'Lihat sebahagian servis dan repair yang kami buat setiap hari.',
    'Aircond servicing & recharge': 'Servis & isi gas aircond',
    'Aircond compressor replacement': 'Tukar compressor aircond',
    'Brake disc & pad replacement': 'Tukar disc brake & pad',
    'Timing belt & major service': 'Timing belt & servis major',
    'Drive belt & tensioner': 'Drive belt & tensioner',
    'Drive shaft replacement': 'Tukar drive shaft',
    'Shock absorber replacement': 'Tukar shock absorber',
    'Suspension & steering overhaul': 'Overhaul suspension & steering',
    'Steering rack replacement': 'Tukar steering rack',
    'Towing & workshop transport': 'Towing & angkut ke bengkel',

    // Contact
    'Find us': 'Cari kami',
    'Visit our workshop': 'Datang ke bengkel kami',
    'Visit the workshop': 'Datang ke bengkel',
    'Drop by, call us, or message us on WhatsApp. We are easy to reach.': 'Singgah, call, atau WhatsApp kami. Senang nak hubungi.',
    'Contact & Hours': 'Hubungi & Waktu',
    'Address': 'Alamat',
    'Get directions': 'Dapatkan arah',
    'Phone & WhatsApp': 'Telefon & WhatsApp',
    '(WhatsApp & calls)': '(WhatsApp & call)',
    'Appointments are best made via WhatsApp.': 'Cara terbaik buat temujanji ialah melalui WhatsApp.',
    'Appointments best made via WhatsApp.': 'Cara terbaik buat temujanji ialah melalui WhatsApp.',
    'Follow us': 'Ikuti kami',
    'Operating Hours': 'Waktu Operasi',
    'Hours': 'Waktu',
    'Monday – Saturday': 'Isnin – Sabtu',
    'Sunday': 'Ahad',
    'Closed': 'Tutup',
    'Hours shown are a guide. Please confirm public-holiday hours on WhatsApp.': 'Waktu ni panduan je. Sila sahkan waktu cuti umum melalui WhatsApp.',
    'Monday to Saturday, 9:30 AM to 6:00 PM. Sunday closed.': 'Isnin hingga Sabtu, 9:30 pagi hingga 6:00 petang. Ahad tutup.',
    'Hours are a guide, please confirm public holidays on WhatsApp.': 'Waktu ni panduan je, sila sahkan cuti umum melalui WhatsApp.',
    'A guide, please confirm public holidays on WhatsApp.': 'Panduan je, sila sahkan cuti umum melalui WhatsApp.',

    // Footer
    'Quick Links': 'Pautan Pantas',
    'Explore': 'Jelajah',
    'Free Home Pickup': 'Pickup Rumah Percuma',
    'Location & Hours': 'Lokasi & Waktu',
    'Get in touch': 'Hubungi kami',
    'Chat on WhatsApp': 'Chat Kat WhatsApp',
    'All rights reserved.': 'Hak cipta terpelihara.',
    'Trusted car servicing, aircond, diagnosis and engine/transmission overhaul in Taman Kajang Utama, serving Bangi, Semenyih and the surrounding Selangor areas since 2020.': 'Servis kereta, aircond, diagnosis dan overhaul enjin/transmisi yang dipercayai di Taman Kajang Utama, melayani Bangi, Semenyih dan sekitar Selangor sejak 2020.',
    'Trusted car servicing, aircond, diagnosis and engine work in Taman Kajang Utama, serving Bangi, Semenyih and the surrounding Selangor areas since 2020.': 'Servis kereta, aircond, diagnosis dan kerja enjin yang dipercayai di Taman Kajang Utama, melayani Bangi, Semenyih dan sekitar Selangor sejak 2020.',
    'Switch to Desktop View': 'Tukar ke Paparan Desktop',
    'Switch to Mobile View': 'Tukar ke Paparan Mudah Alih',
    'Bengkel Kereta Kajang · Trusted since 2020': 'Bengkel Kereta Kajang · Dipercayai sejak 2020'
  };

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  // Collect translatable text nodes once, remembering the pristine English text.
  var nodes = [], originals = [];
  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        while (p && p !== document.body) {
          var t = p.nodeName;
          if (t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
          if (p.classList && p.classList.contains('mds-ui')) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) { nodes.push(n); originals.push(n.nodeValue); }
  }

  function apply(lang) {
    for (var i = 0; i < nodes.length; i++) {
      var orig = originals[i];
      if (lang === 'ms') {
        var m = orig.match(/^(\s*)([\s\S]*?)(\s*)$/);
        var core = norm(m[2]);
        var t = DICT[core];
        if (t) nodes[i].nodeValue = m[1] + t + m[3];
        else nodes[i].nodeValue = orig;
      } else {
        nodes[i].nodeValue = orig;
      }
    }
    document.documentElement.lang = lang;
  }

  function init() {
    collect();

    // ---- Back-to-top button: fixed bottom-right, above the WhatsApp FAB ----
    var top = document.createElement('button');
    top.type = 'button';
    top.className = 'mds-ui';
    top.setAttribute('aria-label', 'Back to top');
    top.style.cssText = 'position:fixed;right:20px;bottom:88px;z-index:50;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:9999px;background:#14151A;color:#fff;box-shadow:0 10px 28px rgba(0,0,0,.28);cursor:pointer;border:1px solid rgba(255,255,255,.14);opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .25s, transform .25s, background .2s;';
    top.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    top.addEventListener('mouseenter', function () { top.style.background = '#E01E26'; });
    top.addEventListener('mouseleave', function () { top.style.background = '#14151A'; });
    document.body.appendChild(top);

    // ---- Language switch: prefer the in-header button (#lang-toggle, top-right);
    //      fall back to a floating top-right pill if the page has no header button ----
    var lang = document.getElementById('lang-toggle');
    if (!lang) {
      lang = document.createElement('button');
      lang.type = 'button';
      lang.className = 'mds-ui';
      lang.setAttribute('aria-label', 'Switch language');
      lang.style.cssText = 'position:fixed;right:20px;top:16px;z-index:60;display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 14px;border-radius:9999px;background:#14151A;color:#fff;font:600 14px Inter,system-ui,sans-serif;box-shadow:0 10px 28px rgba(0,0,0,.28);cursor:pointer;border:1px solid rgba(255,255,255,.14);';
      lang.innerHTML = '<i class="fa-solid fa-globe" style="color:#E01E26" aria-hidden="true"></i><span id="mds-lang-label">BM</span>';
      document.body.appendChild(lang);
    }
    var label = lang.querySelector('#mds-lang-label') || lang;

    // English is the default. Key is versioned so any older saved choice resets to English.
    var current = localStorage.getItem('mdsLangPref') || 'en';
    function setLang(l) {
      current = l;
      localStorage.setItem('mdsLangPref', l);
      apply(l);
      label.textContent = (l === 'en') ? 'BM' : 'ENG';
    }
    setLang(current);
    lang.addEventListener('click', function () { setLang(current === 'en' ? 'ms' : 'en'); });

    // Show/hide back-to-top on scroll
    function onScroll() {
      var show = window.scrollY > 400;
      top.style.opacity = show ? '1' : '0';
      top.style.visibility = show ? 'visible' : 'hidden';
      top.style.transform = show ? 'none' : 'translateY(8px)';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
