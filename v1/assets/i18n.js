/*
  MDS Autoworks — shared UI helpers used by all design versions (root/v1, v2, v3):
    1) Back-to-top button (bottom-right, above the WhatsApp FAB)
    2) Language switch: English (default) <-> natural, professional Bahasa Malaysia

  The Malay switch walks visible text nodes and swaps any that match a key in
  DICT (whitespace-normalised). Anything without a translation stays English.
  Brand names, numbers and phone numbers are intentionally left as-is.
*/
(function () {
  // English (normalised) -> natural Bahasa Malaysia (conversational + professional,
  // keeping familiar workshop terms: aircond, overhaul, ori, compressor, etc.)
  var DICT = {
    // Nav / header / global
    'Skip to main content': 'Terus ke kandungan utama',
    'Services': 'Servis',
    'Why Us': 'Kenapa Kami',
    'Free Pickup': 'Pickup Percuma',
    'Reviews': 'Review',
    'Location': 'Lokasi',
    'Contact': 'Hubungi',
    'Book on WhatsApp': 'Tempah Slot di WhatsApp',
    'Book Now': 'Tempah Slot',
    'Book': 'Tempah',

    // Hero (root/v1)
    'Serving Kajang, Bangi, Semenyih & surrounding Selangor': 'Kawasan Kajang, Bangi, Semenyih & sekitar Selangor',
    'Honest Car Service & Repair in Selangor': 'Pusat Servis & Membaiki Kereta yang Jujur di Selangor',
    'From minor & major servicing to aircond, diagnosis and full engine overhauls, all handled by mechanics with': 'Daripada servis minor & major, penyelenggaraan aircond, diagnosis, sehinggalah overhaul enjin sepenuhnya, semuanya dikendalikan oleh mekanik yang mempunyai lebih',
    '8+ years of hands-on experience': '8 tahun pengalaman praktikal',
    ', using original parts.': ', menggunakan alat ganti tulen (ori).',
    'Rated 4.9★ on Google.': 'Mendapat rating 4.9★ di Google.',
    '4.9 · Google Reviews': '4.9 · Review Google',
    'Our Services': 'Servis Kami',
    'Prefer to call?': 'Nak call terus?',
    'Trusted since 2020': 'Dipercayai sejak 2020',
    'Original & quality parts': 'Alat ganti ori & berkualiti',
    'Free home pickup': 'Pickup dari rumah percuma',

    // Hero (v2 split headline: "in honest hands.")
    'Your car,': 'Kereta anda,',
    'in': 'di',
    'honest': 'tangan yang',
    'hands.': 'jujur.',
    // Hero (v3)
    'Open · Taman Kajang Utama, Selangor': 'Buka · Taman Kajang Utama, Selangor',
    'Precision car care,': 'Servis kereta yang teliti,',
    'done right.': 'dibuat dengan betul.',
    'Servicing, aircond, diagnosis and engine work by mechanics with 8+ years of experience. Original parts, fair prices, and free home pickup. Trusted since 2020.': 'Servis, aircond, diagnosis dan kerja enjin oleh mekanik dengan lebih 8 tahun pengalaman. Alat ganti ori, harga berpatutan, dan pickup dari rumah percuma. Dipercayai sejak 2020.',
    '4.9 on Google': '4.9 di Google',

    // Stats
    'Google rating': 'Rating Google',
    'Trusted since': 'Dipercayai sejak',
    'Years experience': 'Tahun pengalaman',
    'Home pickup fee': 'Caj pickup rumah',
    'Home pickup': 'Pickup rumah',

    // Services
    'Our services': 'Servis Kami',
    'What we do': 'Apa Kami Buat',
    'Complete car care under one roof': 'Semua servis kereta di bawah satu bumbung',
    'Complete car care': 'Servis Kereta Lengkap',
    "Whether it's a routine service or a major overhaul, our experienced team keeps you safely on the road, for all makes and models.": 'Sama ada servis biasa atau overhaul besar, team kami akan memastikan kereta anda selamat dipandu di jalan raya, untuk semua jenis dan model.',
    'Whether it is a quick service or a major overhaul, our team keeps you safely on the road, for all makes and models.': 'Sama ada servis pantas atau overhaul besar, team kami akan memastikan kereta anda selamat dipandu di jalan raya, untuk semua jenis dan model.',
    'Quick service or major overhaul, our team keeps you safely on the road, for all makes and models.': 'Servis pantas atau overhaul besar, team kami memastikan kereta anda selamat dipandu, untuk semua jenis dan model.',
    'Minor & Major Servicing': 'Servis Minor & Major',
    'Aircond Specialist': 'Pakar Aircond',
    '(Repair & Service)': '(Baiki & Servis)',
    'Vehicle Diagnosis & Inspection': 'Diagnosis & Pemeriksaan Kereta',
    'Transmission & Engine Overhaul': 'Overhaul Transmisi & Enjin',
    'Scheduled maintenance to keep your car running smoothly and protect its resale value.': 'Servis berjadual supaya pemanduan lebih lancar dan mengekalkan nilai jualan semula kereta anda.',
    'Engine oil & filter replacement': 'Penukaran minyak enjin & penapis (filter)',
    'Brakes, belts, batteries & filters': 'Brek, tali sawat, bateri & penapis',
    'Full multi-point safety check': 'Pemeriksaan keselamatan menyeluruh',
    'Beat the Malaysian heat. We diagnose and fix weak or warm air-conditioning at the root cause.': 'Atasi cuaca panas Malaysia. Kami akan cari dan baiki punca aircond anda tidak sejuk.',
    'Aircond servicing & gas top-up': 'Servis aircond & tambah gas',
    'Compressor, cooling coil & blower repair': 'Baiki compressor, cooling coil & blower',
    'Leak detection & odour treatment': 'Kesan kebocoran & hilangkan bau hapak',
    'Computerised scanning to pinpoint the real problem fast. No guesswork, no unnecessary parts.': 'Imbasan komputer untuk mengesan masalah sebenar dengan pantas. Tiada tekaan, tiada penukaran alat ganti yang tidak perlu.',
    'Check-engine & warning-light scanning': "Imbasan 'check-engine' & lampu amaran",
    'Pre-purchase & used-car inspection': 'Pemeriksaan sebelum pembelian kereta terpakai',
    'Honest report before any work begins': 'Laporan jujur sebelum kerja dimulakan',
    "Major repair work handled with care by mechanics who have done it for years, restoring your car's power and reliability.": 'Kerja membaiki yang rumit dikendalikan rapi oleh mekanik berpengalaman untuk memulihkan kuasa dan ketahanan kereta anda.',
    'Engine rebuild & overhaul': 'Bina semula (rebuild) & overhaul enjin',
    'Auto & manual transmission repair': 'Baiki transmisi auto & manual',
    'Original & high-quality replacement parts': 'Alat ganti ori & berkualiti tinggi',
    "Not sure what your car needs? Send us a photo or describe the problem and we'll be happy to advise.": 'Tak pasti kereta anda perlukan apa? Hantar gambar atau ceritakan masalah kereta anda, kami sedia membantu memberikan nasihat.',
    'Ask us on WhatsApp': 'Tanya Kami di WhatsApp',
    // v2 long service descriptions
    'Scheduled maintenance that keeps your car running smoothly and protects its resale value. Engine oil and filter, brakes, belts, batteries, and a full multi-point safety check.': 'Servis berjadual supaya pemanduan lebih lancar dan mengekalkan nilai jualan semula. Minyak enjin dan penapis, brek, tali sawat, bateri, dan pemeriksaan keselamatan menyeluruh.',
    'Beat the Malaysian heat. We diagnose and fix weak or warm air-conditioning at the root cause. Servicing and gas top-up, compressor and cooling coil repair, leak detection and odour treatment.': 'Atasi cuaca panas Malaysia. Kami cari dan baiki punca aircond tidak sejuk. Servis dan tambah gas, baiki compressor dan cooling coil, kesan kebocoran dan hilangkan bau hapak.',
    'Computerised scanning to pinpoint the real problem fast. No guesswork, no unnecessary parts. Check-engine and warning-light scanning, pre-purchase inspection, and an honest report before any work begins.': 'Imbasan komputer untuk mengesan masalah sebenar dengan pantas. Tiada tekaan, tiada penukaran alat ganti yang tidak perlu. Imbasan check-engine dan lampu amaran, pemeriksaan sebelum pembelian, dan laporan jujur sebelum kerja dimulakan.',
    "Major repair work handled with care by mechanics who have done it for years, restoring your car's power and reliability. Engine rebuild, auto and manual transmission repair, with original and high-quality parts.": 'Kerja membaiki yang rumit dikendalikan rapi oleh mekanik berpengalaman untuk memulihkan kuasa dan ketahanan kereta. Bina semula enjin, baiki transmisi auto dan manual, dengan alat ganti ori dan berkualiti tinggi.',
    // v3 service descriptions
    'Scheduled maintenance to keep your car smooth and reliable. Oil and filter, brakes, belts, batteries, and a full multi-point safety check.': 'Servis berjadual supaya kereta lancar dan boleh diharap. Minyak enjin dan penapis, brek, tali sawat, bateri, dan pemeriksaan keselamatan menyeluruh.',
    'We fix weak or warm air-conditioning at the root cause. Servicing and gas top-up, compressor and cooling coil repair, leak detection and odour treatment.': 'Kami baiki punca aircond tidak sejuk. Servis dan tambah gas, baiki compressor dan cooling coil, kesan kebocoran dan hilangkan bau hapak.',
    'Computerised scanning to pinpoint the real problem fast. No guesswork. Warning-light scanning, pre-purchase inspection, and an honest report before any work.': 'Imbasan komputer untuk mengesan masalah sebenar dengan pantas. Tiada tekaan. Imbasan lampu amaran, pemeriksaan sebelum pembelian, dan laporan jujur sebelum kerja.',
    'Major repair work by mechanics who have done it for years, restoring power and reliability. Engine rebuild, auto and manual transmission, original parts.': 'Kerja membaiki oleh mekanik berpengalaman untuk memulihkan kuasa dan ketahanan. Bina semula enjin, transmisi auto dan manual, alat ganti ori.',

    // Why us
    'Why choose us': 'Kenapa Pilih Kami',
    'A workshop drivers genuinely trust': 'Bengkel yang diyakini oleh para pemandu',
    'has been serving drivers across Selangor': 'telah memberikan perkhidmatan kepada para pemandu di seluruh Selangor',
    'since 2020': 'sejak 2020',
    '. We keep your car safe and reliable with straight talk, dependable workmanship and fair prices. We treat every vehicle as if it were our own.': '. Kami memastikan kereta anda selamat dan boleh diharap, melalui perbincangan telus, hasil kerja berkualiti, dan harga berpatutan. Kami menjaga setiap kereta pelanggan ibarat kereta kami sendiri.',
    'Serving drivers across Selangor since 2020, with straight talk and dependable workmanship. We treat every vehicle as if it were our own.': 'Memberikan perkhidmatan kepada pemandu di seluruh Selangor sejak 2020, dengan perbincangan telus dan hasil kerja yang boleh diharap. Kami menjaga setiap kereta ibarat kereta sendiri.',
    'Serving drivers across Selangor since 2020. We treat every vehicle as if it were our own.': 'Memberikan perkhidmatan kepada pemandu di seluruh Selangor sejak 2020. Kami menjaga setiap kereta ibarat kereta sendiri.',
    'Straight talk. Solid work.': 'Jujur. Kerja Berkualiti.',
    '8+ years of experience': 'Lebih 8 Tahun Pengalaman',
    '8+ years experience': 'Lebih 8 Tahun Pengalaman',
    'Seasoned mechanics who have seen and fixed it all, from quick jobs to major overhauls.': 'Mekanik berpengalaman yang telah mengendalikan pelbagai jenis kerosakan, daripada servis pantas hinggalah ke overhaul besar.',
    'Seasoned mechanics, from quick jobs to major overhauls.': 'Mekanik berpengalaman, daripada kerja pantas hinggalah overhaul besar.',
    'Original & high-quality parts': 'Alat Ganti Ori & Berkualiti Tinggi',
    'Original parts': 'Alat Ganti Ori',
    'We fit genuine and quality-grade spare parts that last. No cheap shortcuts.': 'Kami hanya menggunakan alat ganti ori dan berkualiti yang tahan lama. Tiada kompromi dengan barang murahan.',
    'Genuine and quality-grade parts that last. No cheap shortcuts.': 'Alat ganti ori dan berkualiti yang tahan lama. Tiada kompromi dengan barang murahan.',
    'Parts that last. No cheap shortcuts.': 'Alat ganti yang tahan lama. Tiada kompromi dengan barang murahan.',
    'Reasonable, transparent pricing': 'Harga Berpatutan & Telus',
    'Fair pricing': 'Harga Berpatutan',
    'Clear quotes up front, so there are no surprises at the counter.': 'Sebut harga diberikan dengan jelas dari awal, jadi tiada kos tersembunyi semasa pembayaran.',
    'Clear quotes up front. No surprises at the counter.': 'Sebut harga jelas dari awal. Tiada kos tersembunyi semasa pembayaran.',
    "Too busy to drop off? We'll collect your car from home, free of charge.": 'Terlalu sibuk untuk hantar kereta? Kami akan ambil kereta anda terus dari rumah, secara percuma.',
    'Too busy to drop off? We collect your car, free of charge.': 'Terlalu sibuk untuk hantar? Kami ambil kereta anda, secara percuma.',
    "We'll collect your car from home, free of charge.": 'Kami akan ambil kereta anda dari rumah, secara percuma.',
    'We collect your car from home, free of charge.': 'Kami ambil kereta anda dari rumah, secara percuma.',
    'Google Reviews': 'Review Google',
    'out of 5 stars': 'daripada 5 bintang',
    'Rated': 'Mendapat',
    '4.9★ by happy customers': '4.9★ daripada pelanggan yang berpuas hati',
    'across Selangor for honest advice, quality work and fair prices.': 'di seluruh Selangor kerana nasihat yang jujur, kerja berkualiti, dan harga berpatutan.',

    // Free pickup
    "Too busy to drop off your car? We'll come to you.": 'Terlalu sibuk untuk ke bengkel? Kami datang kepada anda.',
    'Too busy to drop off? We come to you.': 'Terlalu sibuk untuk hantar kereta? Kami datang kepada anda.',
    'Too busy? We come to you.': 'Terlalu sibuk? Kami datang kepada anda.',
    'Skip the hassle. Just WhatsApp us your location and preferred time. Our team will collect your car, service it at our workshop, and keep you updated every step of the way.': 'Tidak perlu bersusah payah. WhatsApp sahaja lokasi dan masa yang sesuai. Team kami akan mengambil kereta anda, servis di bengkel, dan memberikan update setiap langkah.',
    'Just WhatsApp us your location and preferred time. We collect your car, service it at our workshop, and keep you updated until it is ready. No extra charge.': 'WhatsApp sahaja lokasi dan masa yang sesuai. Kami ambil kereta anda, servis di bengkel, dan berikan update sehingga siap. Tanpa sebarang caj tambahan.',
    'WhatsApp your location and preferred time. We collect your car, service it, and keep you updated until it is ready. No extra charge.': 'WhatsApp lokasi dan masa yang sesuai. Kami ambil kereta, servis, dan berikan update sehingga siap. Tanpa sebarang caj tambahan.',
    'No extra charge.': 'Tanpa sebarang caj tambahan.',
    'Free collection from your home. No charge.': 'Ambil dari rumah percuma. Tiada caj tersembunyi.',
    'Clear quote sent to you before any work starts.': 'Sebut harga yang jelas diberikan sebelum kerja bermula.',
    'Updates by WhatsApp until your car is ready.': 'Update gambar/video melalui WhatsApp sehingga kereta anda siap.',
    'Arrange a free pickup': 'Atur Pickup Percuma',
    'Arrange a pickup': 'Atur Pickup',
    'How it works': 'Cara Kami Beroperasi',
    'Message us on WhatsApp': 'WhatsApp Kami',
    'Tell us the problem, your address and a convenient time.': 'Beritahu masalah kereta, alamat, dan masa yang sesuai.',
    'Tell us the problem, your address and a time.': 'Beritahu masalah, alamat, dan masa yang sesuai.',
    'We collect your car, free of charge': 'Kami Ambil Kereta Anda (Percuma)',
    'We collect your car, free': 'Kami Ambil Kereta Anda (Percuma)',
    'Our team picks it up from your home at a time that suits you.': 'Team kami akan datang mengambil kereta dari rumah mengikut masa kelapangan anda.',
    'Our team picks it up at a time that suits you.': 'Team kami ambil mengikut masa kelapangan anda.',
    'Picked up at a time that suits you.': 'Diambil mengikut masa kelapangan anda.',
    'We diagnose & quote': 'Kami Periksa & Berikan Harga',
    'Diagnose, quote, repair': 'Periksa, Sebut Harga, Baiki',
    'You approve a clear price before any work begins.': 'Anda perlu bersetuju dengan sebut harga yang jelas sebelum sebarang kerja dimulakan.',
    'You approve a clear price before work begins.': 'Anda bersetuju dengan sebut harga yang jelas sebelum kerja bermula.',
    'Car ready & returned': 'Kereta Siap & Dihantar Semula',
    'Car ready and returned': 'Kereta Siap & Dihantar Semula',
    'We finish the job and let you know your car is ready.': 'Kami siapkan kerja dengan teliti dan maklumkan kepada anda sebaik sahaja kereta sedia untuk diambil.',
    'We finish the job and let you know it is ready.': 'Kami siapkan kerja dan maklumkan sebaik sahaja kereta sedia.',
    'We finish the job and let you know.': 'Kami siapkan kerja dan maklumkan kepada anda.',

    // Reviews
    'What customers say': 'Kata Pelanggan',
    'Kind words': 'Kata Pelanggan',
    'Rated 4.9★ by our customers': 'Mendapat 4.9★ daripada pelanggan kami',
    '4.9 / 5 on Google': '4.9 / 5 di Google',
    '4.9 · 86 Google reviews': '4.9 · 86 Review Google',
    '4.9 / 5 · 86 Google reviews': '4.9 / 5 · 86 Review Google',
    '4.9 · 86 Google reviews · Since 2020': '4.9 · 86 Review Google · Sejak 2020',
    'Read our reviews on Google': 'Baca review kami di Google',
    'Read reviews on Google': 'Baca review di Google',

    // Our work / gallery
    'Our Work': 'Hasil Kerja',
    'Our work': 'Hasil Kerja Kami',
    'Real jobs from our workshop': 'Kerja sebenar dari bengkel kami',
    'A look at some of the servicing and repairs we handle every day.': 'Lihat sebahagian daripada proses servis dan pembaikan yang kami lakukan setiap hari.',
    'Aircond servicing & recharge': 'Servis & isi gas aircond',
    'Aircond compressor replacement': 'Tukar compressor aircond',
    'Brake disc & pad replacement': 'Tukar disc & pelapik brek (brake pad)',
    'Timing belt & major service': 'Timing belt & servis major',
    'Drive belt & tensioner': 'Drive belt & tensioner',
    'Drive shaft replacement': 'Tukar drive shaft',
    'Shock absorber replacement': 'Tukar shock absorber',
    'Suspension & steering overhaul': 'Overhaul suspension & steering',
    'Steering rack replacement': 'Tukar steering rack',
    'Towing & workshop transport': 'Towing & angkut ke bengkel',

    // Contact
    'Find us': 'Kunjungi Kami',
    'Visit our workshop': 'Kunjungi Kami',
    'Visit the workshop': 'Kunjungi Kami',
    'Drop by, call us, or message us on WhatsApp. We are easy to reach.': 'Singgah, hubungi, atau WhatsApp kami. Kami sedia membantu.',
    'Contact & Hours': 'Hubungi & Waktu Operasi',
    'Address': 'Alamat',
    'Get directions': 'Dapatkan arah',
    'Phone & WhatsApp': 'Telefon & WhatsApp',
    '(WhatsApp & calls)': '(WhatsApp & Call)',
    'Appointments are best made via WhatsApp.': 'Cara terbaik untuk membuat temujanji adalah melalui WhatsApp.',
    'Appointments best made via WhatsApp.': 'Cara terbaik untuk membuat temujanji adalah melalui WhatsApp.',
    'Follow us': 'Ikuti Kami',
    'Operating Hours': 'Waktu Operasi',
    'Hours': 'Waktu',
    'Monday – Saturday': 'Isnin – Sabtu',
    'Sunday': 'Ahad',
    'Closed': 'Tutup',
    'Hours shown are a guide. Please confirm public-holiday hours on WhatsApp.': 'Waktu ini adalah sebagai panduan. Sila sahkan waktu operasi pada hari cuti umum melalui WhatsApp.',
    'Monday to Saturday, 9:30 AM to 6:00 PM. Sunday closed.': 'Isnin hingga Sabtu, 9:30 pagi hingga 6:00 petang. Ahad tutup.',
    'Hours are a guide, please confirm public holidays on WhatsApp.': 'Waktu ini adalah sebagai panduan, sila sahkan waktu operasi pada hari cuti umum melalui WhatsApp.',
    'A guide, please confirm public holidays on WhatsApp.': 'Sebagai panduan, sila sahkan waktu cuti umum melalui WhatsApp.',

    // Footer
    'Quick Links': 'Pautan Pantas',
    'Explore': 'Jelajah',
    'Free Home Pickup': 'Pickup Dari Rumah Percuma',
    'Location & Hours': 'Lokasi & Waktu',
    'Get in touch': 'Hubungi Kami',
    'Chat on WhatsApp': 'Hubungi via WhatsApp',
    'All rights reserved.': 'Hak cipta terpelihara.',
    'Trusted car servicing, aircond, diagnosis and engine/transmission overhaul in Taman Kajang Utama, serving Bangi, Semenyih and the surrounding Selangor areas since 2020.': 'Servis kereta, aircond, diagnosis dan overhaul enjin/transmisi yang dipercayai di Taman Kajang Utama, memberi perkhidmatan ke Bangi, Semenyih dan sekitar Selangor sejak 2020.',
    'Trusted car servicing, aircond, diagnosis and engine work in Taman Kajang Utama, serving Bangi, Semenyih and the surrounding Selangor areas since 2020.': 'Servis kereta, aircond, diagnosis dan kerja enjin yang dipercayai di Taman Kajang Utama, memberi perkhidmatan ke Bangi, Semenyih dan sekitar Selangor sejak 2020.',
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
