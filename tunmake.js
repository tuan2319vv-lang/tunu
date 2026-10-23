/* ===== <script> #1 ===== */
(function(){
"use strict";
try{
window.__I18N = {
  vi: {
    lang_vi:"VI", lang_en:"EN",
    gate_sub:"Nhập Key để vào Tool", gate_btn:"XÁC NHẬN", gate_ph:"VUI LÒNG NHẬP KEY",
    gate_err_empty:"Vui lòng nhập Key.", gate_err_invalid:"Key không hợp lệ.", gate_err_used:"Key đã hết lượt.",
    gate_ok_vip:"👑 Xác minh VIP thành công!", gate_ok_lat:"✅ Xác minh LAT thành công!",
    status_ok:"Online", out_btn:"THOÁT", server_lbl:"Server:", loading_status:"Đang tải hệ thống...",
    key_remain_lat:"1 file duy nhất", key_remain_vip:"∞ Không giới hạn",
    tab_thuong:"Thường", tab_aimvip:"Aim", tab_spin:"Spin", tab_shader:"Shader", tab_custom:"Custom", tab_log:"Nhật Ký",
    step1:"📂 Chọn File Gốc", step2:"🎯 Chọn Chức Năng", step2_aimvip:"🎯 Chọn Chức Năng Aim Asset",
    upload_btn:"📁 Chọn file Bundle", submit_btn:"Xử Lý & Tải File", submit_ing:"Đang xử lý...",
    msg_need_file:"Chưa chọn file.", msg_need_vip:"Cần Key VIP để sử dụng tab này.",
    msg_no_data:"⚠️ Chức năng chưa có data offset.", msg_wait:"Đang xử lý...", msg_ok:"✅ Tải file thành công!", msg_key_out:"Key đã hết lượt.",
    aimvip_locked_title:"AIM ASSET · VIP ONLY", aimvip_locked_desc:"Tab chỉ dành cho Key VIP.<br>Nhập Key VIP để sử dụng.",
    shader_title:"SHADER ĐỊNH VỊ MÀU", shader_desc:"Tính năng đang được phát triển.<br>Sẽ sớm khởi tạo sau:",
    cd_day:"Ngày", cd_hour:"Giờ", cd_min:"Phút", cd_sec:"Giây",
    spin_title:"🎰 VÒNG QUAY MAY MẮN", spin_sub:"Ẩn quà · 50/50 · 1 lần/device · 3 phút", spin_btn:"QUAY",
    spin_history:"Lịch sử quay", spin_empty:"Chưa có lần quay nào",
    spin_cooldown_label:"Vui lòng chờ hết thời gian để quay tiếp", spin_spinning:"ĐANG QUAY",
    spin_win:"🎉 TRÚNG THƯỞNG", spin_lose:"😢 Chúc bạn may mắn lần sau", spin_vip_win:"👑 TRÚNG KEY VIP",
    custom_paste:"📝 Paste Dump", custom_manual:"✏️ Thủ Công",
    custom_dump_title:"📝 Dán Hex Dump", custom_manual_title:"✏️ Nhập Offset + Hex",
    custom_offset:"Offset (hex)", custom_hex:"Hex bytes", custom_list:"📋 Danh Sách", custom_empty:"Chưa có entry.",
    custom_file:"📂 Chọn File & Xử Lý", custom_add_fail:"Hex không hợp lệ hoặc bị trùng",
    custom_blocked_ff:"⚠️ File không phải Free Fire",
    aimbot_soon:"⏳ Aimbot sẽ sớm khởi tạo. Vui lòng chờ admin.",
    activity_title:"NHẬT KÝ HOẠT ĐỘNG",
    success_title:"Patch thành công", success_hint:"File đã được patch. Bấm nút bên dưới để xem file và tải về.",
    view_file_btn:"📦 LẤY FILE", download_title:"FILE ĐÃ PATCH", file_label:"File", password_label:"Mật khẩu",
    copy_btn:"SAO CHÉP", download_btn:"TẢI FILE VỀ MÁY",
    game_ff:"Free Fire Thường", game_ffmax:"Free Fire MAX", game_unknown:"Không xác định", pkg_unknown:"Không xác định",
    kind_cache:"Cache", kind_asset:"Asset", kind_bundle:"Bundle", kind_unknown:"Không xác định",
    processing_title:"Đang xử lý", processing_desc:"Vui lòng chờ trong giây lát...", processing_status:"Đang patch file"
  },
  en: {
    lang_vi:"VI", lang_en:"EN",
    gate_sub:"Enter Key to access Tool", gate_btn:"ENTER TOOL", gate_ph:"ENTER YOUR KEY",
    gate_err_empty:"Please enter Key.", gate_err_invalid:"Invalid Key.", gate_err_used:"Key has been used.",
    gate_ok_vip:"👑 VIP verified!", gate_ok_lat:"✅ LAT verified!",
    status_ok:"Online", out_btn:"EXIT", server_lbl:"Server:", loading_status:"Loading system...",
    key_remain_lat:"1 file only", key_remain_vip:"∞ Unlimited",
    tab_thuong:"Regular", tab_aimvip:"Aim", tab_spin:"Spin", tab_shader:"Shader", tab_custom:"Custom", tab_log:"Logs",
    step1:"📂 Choose Source File", step2:"🎯 Choose Function", step2_aimvip:"🎯 Choose Aim Asset Function",
    upload_btn:"📁 Choose Bundle file", submit_btn:"Process & Download", submit_ing:"Processing...",
    msg_need_file:"No file selected.", msg_need_vip:"VIP Key required for this tab.",
    msg_no_data:"⚠️ Function has no offset data.", msg_wait:"Processing...", msg_ok:"✅ Downloaded!", msg_key_out:"Key exhausted.",
    aimvip_locked_title:"AIM ASSET · VIP ONLY", aimvip_locked_desc:"VIP Key required.<br>Enter VIP Key to use.",
    shader_title:"COLOR SHADER", shader_desc:"Feature is under development.<br>Will be available in:",
    cd_day:"Days", cd_hour:"Hours", cd_min:"Mins", cd_sec:"Secs",
    spin_title:"🎰 LUCKY SPIN", spin_sub:"Hidden prize · 50/50 · 1/device · 3 min", spin_btn:"SPIN",
    spin_history:"Spin history", spin_empty:"No spins yet",
    spin_cooldown_label:"Please wait for cooldown to finish", spin_spinning:"SPINNING",
    spin_win:"🎉 YOU WIN", spin_lose:"😢 Better luck next time", spin_vip_win:"👑 VIP KEY WIN",
    custom_paste:"📝 Paste Dump", custom_manual:"✏️ Manual",
    custom_dump_title:"📝 Paste Hex Dump", custom_manual_title:"✏️ Enter Offset + Hex",
    custom_offset:"Offset (hex)", custom_hex:"Hex bytes", custom_list:"📋 List", custom_empty:"No entries yet.",
    custom_file:"📂 Choose File & Process", custom_add_fail:"Hex invalid or duplicate",
    custom_blocked_ff:"⚠️ File is not Free Fire",
    aimbot_soon:"⏳ Aimbot will be available soon. Please wait.",
    activity_title:"ACTIVITY LOG",
    success_title:"Patched successfully", success_hint:"File patched. Tap the button below to view and download.",
    view_file_btn:"📦 GET FILE", download_title:"PATCHED FILE", file_label:"File", password_label:"Password",
    copy_btn:"COPY", download_btn:"DOWNLOAD FILE",
    game_ff:"Free Fire", game_ffmax:"Free Fire MAX", game_unknown:"Unknown", pkg_unknown:"Unknown",
    kind_cache:"Cache", kind_asset:"Asset", kind_bundle:"Bundle", kind_unknown:"Unknown",
    processing_title:"Processing", processing_desc:"Please wait a moment...", processing_status:"Patching file"
  }
};
console.log("%c[P13] i18n ready", "background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){ console.error("[P13 fatal]", e); }
})();

/* ===== <script> #2 ===== */
(function(){
"use strict";
try{

function maskKey(key){
  if(!key) return '—';
  var p = String(key).split('-');
  if(p.length < 2) return key;
  var out = [p[0]];
  for(var i = 1; i < p.length; i++) out.push('XXX');
  return out.join('-');
}
window.__maskKey = maskKey;

window.__TG_TPL = {
  gateOk: function(c){
    var icon = c.keyType === 'vip' ? '👑' : '🔑';
    var label = c.keyType === 'vip' ? 'VIP' : 'LAT';
    var remain = c.keyType === 'vip' ? '∞ Không giới hạn' : '1 file duy nhất';
    return icon + " <b>" + label + " KEY · ĐÚNG</b>\n" +
      "🔐 Key: <code>" + maskKey(c.key) + "</code>\n" +
      "👤 Còn lại: " + remain + "\n" +
      "🆔 Device: <code>" + (c.device || "—") + "</code>\n" +
      "⏰ " + (c.time || "");
  },
  gateFail: function(c){
    var map = { empty:"⚠️ KEY · RỖNG", invalid:"🚫 KEY · SAI", used:"🔒 LAT · HẾT LƯỢT" };
    return (map[c.reason] || "⚠️ KEY · LỖI") + "\n" +
      (c.key ? "🔐 Key: <code>" + maskKey(c.key) + "</code>\n" : "") +
      "🆔 Device: <code>" + (c.device || "—") + "</code>\n" +
      "⏰ " + (c.time || "");
  },
  enterTool: function(c){
    return "🚪 <b>VÀO TOOL</b>\n" +
      "🔐 Key: <code>" + maskKey(c.key) + "</code>\n" +
      "👤 Loại: " + (c.keyType === 'vip' ? "👑 VIP" : "🔑 LAT") + "\n" +
      "🆔 Device: <code>" + (c.device || "—") + "</code>\n" +
      "⏰ " + (c.time || "");
  },
  exitTool: function(c){
    return "🚪 <b>THOÁT TOOL</b>\n" +
      "🔐 Key: <code>" + maskKey(c.key) + "</code>\n" +
      "👤 Loại: " + (c.keyType === 'vip' ? "👑 VIP" : "🔑 LAT") + "\n" +
      "🆔 Device: <code>" + (c.device || "—") + "</code>\n" +
      "⏰ " + (c.time || "");
  },
  patchDone: function(c){
    return "⚙️ <b>ĐÃ PATCH FILE</b>\n" +
      "━━━━━━━━━━━━━━━━━━\n" +
      "🔐 Key: <code>" + maskKey(c.key) + "</code>\n" +
      "👤 Loại: " + (c.keyType === 'vip' ? "👑 VIP" : "🔑 LAT") + "\n" +
      "📑 Tab: <b>" + (c.tab || "—") + "</b>\n" +
      "🎯 Chức năng: <b>" + (c.func || "—") + "</b>\n" +
      "📁 File: <code>" + (c.fileName || "—") + "</code>\n" +
      "📊 Size: " + (c.size || "—") + "\n" +
      "🔧 Đã ghi: <b>" + (c.soGhi || 0) + "</b> offsets\n" +
      "🆔 Device: " + (c.device || "—") + "\n" +
      "⏰ " + (c.time || "");
  },
  scanResult: function(c){
    return (c.total > 0 ? "🔍" : "⚠️") + " <b>KẾT QUẢ QUÉT</b>\n" +
      "📑 Tab: <b>" + (c.tab || "—") + "</b>\n" +
      "🎯 Func: <b>" + (c.func || "—") + "</b>\n" +
      "✅ Khớp: " + (c.matched || 0) + "/" + (c.total || 0) + "\n" +
      "⏰ " + (c.time || "");
  },
  spinWin: function(c){
    var prefix = c.label || "—";
    var msg = "🎉 <b>TRÚNG THƯỞNG</b>";
    if(/T1|1 file/i.test(prefix)) msg = "🍀 <b>Ngon thí</b>";
    else if(/T3|3 file/i.test(prefix)) msg = "🔥 <b>bú</b>";
    else if(/T2|2 file/i.test(prefix)) msg = "🍀 <b>Ngon thí</b>";
    return "🎰 " + msg + "\n" +
      "🎁 " + prefix + "\n" +
      "🔐 <code>" + (c.key || "—") + "</code>\n" +
      "📁 " + (c.remain || "—") + " file\n" +
      "🆔 " + (c.device || "—") + " · 🌍 " + (c.ip || "—") + "\n" +
      "⏰ " + (c.time || "");
  },
  spinVip: function(c){
    return "🎰 <b>Adu nhức nách 👑</b>\n" +
      "🎁 VIP\n" +
      "🔐 <code>" + (c.key || "—") + "</code>\n" +
      "📁 ∞ không giới hạn\n" +
      "🆔 " + (c.device || "—") + " · 🌍 " + (c.ip || "—") + "\n" +
      "⏰ " + (c.time || "");
  },
  spinLose: function(c){
    return "🎰 <b>VÒNG QUAY · MISS</b>\n" +
      "😢 Chúc bạn may mắn lần sau\n" +
      "📊 Tổng lượt hôm nay: " + (c.todayCount || 0) + "\n" +
      "🆔 " + (c.device || "—") + " · 🌍 " + (c.ip || "—") + "\n" +
      "⏰ " + (c.time || "");
  },
  patchFail: function(c){
    return "❌ <b>LỖI PATCH</b>\n" +
      "📑 Tab: <b>" + (c.tab || "—") + "</b>\n" +
      "🎯 Func: <b>" + (c.func || "—") + "</b>\n" +
      "📁 File: <code>" + (c.fileName || "—") + "</code>\n" +
      "⚠️ Lỗi: " + (c.error || "Không rõ") + "\n" +
      "⏰ " + (c.time || "");
  },
  downloadNotify: function(c){
    return "📥 <b>CÓ NGƯỜI VỪA TẢI FILE</b>\n" +
      "━━━━━━━━━━━━━━━━━━\n" +
      "🔐 Key: <code>" + maskKey(c.key) + "</code>\n" +
      "👤 Loại: " + (c.keyType === 'vip' ? "👑 VIP" : "🔑 LAT") + "\n" +
      "📁 File: <code>" + (c.fileName || "—") + "</code>\n" +
      "📊 Size: " + (c.size || "—") + "\n" +
      "🆔 Device: " + (c.device || "—") + "\n" +
      "⏰ " + (c.time || "");
  }
};

console.log("%c[P14] 10 TG templates ready", "background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){ console.error("[P14 fatal]", e); }
})();

/* ===== <script> #3 ===== */
/* ═══════════════════════════════════════════════════════════
   P15/20 · CORE JS FULL
   ═══════════════════════════════════════════════════════════ */
(function(){"use strict";try{
window.__TG_BOT_TOKEN = "8932128073:AAFI9KrBmCAJ14djh0ZyGO25H4KLzNskAoI";
window.__TG_CHAT_ID   = ["8508776837", "-1004346328616"];
window.__LANG = (function(){try{return localStorage.getItem("tun_lang")||"vi";}catch(e){return"vi";}})();

window.t = function(key,vars){
  var d = window.__I18N && window.__I18N[window.__LANG];
  if(!d) d = window.__I18N && window.__I18N.vi;
  if(!d) return key;
  var s = (d[key]!==undefined)?d[key]:(window.__I18N.vi[key]!==undefined?window.__I18N.vi[key]:key);
  if(vars) Object.keys(vars).forEach(function(k){s=s.replace(new RegExp('\\{'+k+'\\}','g'),vars[k]);});
  return s;
};
window.__applyI18N = function(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k = el.getAttribute('data-i18n'), v = window.t(k);
    if(v===k) return;
    if(v.indexOf('<')!==-1 && v.indexOf('>')!==-1) el.innerHTML = v;
    else el.textContent = v;
  });
  var inp = document.getElementById('gateKeyInput');
  if(inp) inp.placeholder = window.t('gate_ph');
  document.documentElement.lang = window.__LANG;
};
window.setLang = function(lang){
  if(!window.__I18N || !window.__I18N[lang]) return;
  window.__LANG = lang;
  try{localStorage.setItem("tun_lang",lang);}catch(e){}
  window.__applyI18N();
  document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-lang')===lang);});
};

window.__LAT_KEYS = ["LAT-9K2-Q7M-X4B","LAT-3F8-Z1P-R6T","LAT-7H4-W9C-N2V","LAT-5J6-L3D-Y8K","LAT-2M9-T5R-B7Q","LAT-8P1-G4X-H6W","LAT-4R7-K2N-J9F","LAT-6T3-V8L-C5Z","LAT-1W5-M7B-D3S","LAT-9Y2-X6H-P4G","LAT-3A8-Q9K-R7T","LAT-7C4-W2N-V5M","LAT-5E6-L8D-Y3B","LAT-2G9-T4R-H7Q","LAT-8J1-P5X-K6W","LAT-4L7-N2F-J9C"];
window.__VIP_KEYS = ["VIP-301-Q7M-X2K","VIP-302-B4T-R9P","VIP-303-H8L-V3C","VIP-304-N2S-D7Q","VIP-305-X5F-K8M","VIP-306-J9R-P2T","VIP-307-C3W-B6N","VIP-308-V7D-H4S","VIP-309-M2Q-X9L","VIP-310-P6K-C3R","VIP-311-W4N-J8F","VIP-312-D9S-V2M"];
window.__isLatKey = function(k){return window.__LAT_KEYS.indexOf(k)!==-1;};
window.__isVipKey = function(k){return window.__VIP_KEYS.indexOf(k)!==-1;};

window.__HEX_DATA = window.__HEX_DATA || {};
window.__AIMVIP_HEX_DATA = window.__AIMVIP_HEX_DATA || {};

window.__hex = {
  toBytes:function(hex){var o=[],p=String(hex||'').trim().split(/\s+/);for(var i=0;i<p.length;i++)if(/^[0-9A-Fa-f]{2}$/.test(p[i]))o.push(parseInt(p[i],16));return new Uint8Array(o);},
  strToBytes:function(h){var c=String(h||'').replace(/\s+/g,'');if(c.length%2!==0)c=c.substring(0,c.length-1);var o=[];for(var i=0;i<c.length;i+=2){var b=parseInt(c.substring(i,i+2),16);if(!isNaN(b))o.push(b);}return new Uint8Array(o);},
  findPattern:function(b,p,s){s=s||0;var r=[],pL=p.length,bL=b.length;if(pL===0||pL>bL)return r;outer:for(var i=s;i<=bL-pL;i++){for(var j=0;j<pL;j++)if(b[i+j]!==p[j])continue outer;r.push(i);}return r;},
  findFirst:function(b,p,s){var a=this.findPattern(b,p,s||0);return a.length>0?a[0]:-1;}
};

window.__b64 = {
  decode:function(str){try{var c=String(str||'').replace(/\s+/g,'');if(!c)return '';var bin=atob(c),b=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)b[i]=bin.charCodeAt(i);return new TextDecoder('utf-8').decode(b);}catch(e){return '';}},
  parseDump:function(t){if(!t)return [];var o=[],L=String(t).split(/\r?\n/);for(var i=0;i<L.length;i++){var ln=L[i].trim();if(!ln)continue;var off=null,hp=null;var m1=ln.match(/^(?:0x)?([0-9A-Fa-f]{1,10})\s*[\|:=\-]\s*([0-9A-Fa-f\s]+)$/);if(m1){off=parseInt(m1[1],16);hp=m1[2];}else if(/^[0-9A-Fa-f\s]+$/.test(ln))hp=ln;else{var m3=ln.match(/^(?:0x)?([0-9A-Fa-f]{1,10})\s+([0-9A-Fa-f\s]+)$/);if(m3){off=parseInt(m3[1],16);hp=m3[2];}}if(hp===null)continue;var c=hp.replace(/[^0-9A-Fa-f]/g,' ').trim();var ps=c.split(/\s+/).filter(function(b){return b.length===2;});if(ps.length===0)continue;o.push({off:off,hex:ps.map(function(b){return b.toUpperCase();}).join(' ')});}return o;},
  scanAll:function(){
    var r={loaded:[],errors:[]};
    ['cancheckavatar','bungatena','headatena','neckatena','magicatena'].forEach(function(id){
      var el=document.getElementById('b64_'+id);if(!el)return;
      var raw=(el.textContent||'').trim();
      if(!raw||raw.length<20||raw.indexOf('DÁN_BASE64')!==-1||raw.indexOf('__PASTE_')!==-1)return;
      var d=window.__b64.decode(raw);if(!d){r.errors.push(id+': b64 lỗi');return;}
      var p=window.__b64.parseDump(d);
      if(p.length>0){window.__AIMVIP_HEX_DATA[id]=p;r.loaded.push(id+' ('+p.length+')');}else r.errors.push(id+': parse 0');
    });
    if(window.__updateCardBadges)window.__updateCardBadges();
    return r;
  }
};

window.__updateCardBadges = function(){
  var map={cancheckavatar:'cardCanCheckAvatar',bungatena:'cardBungAtena',headatena:'cardHeadAtena',neckatena:'cardNeckAtena',magicatena:'cardMagicAtena'};
  Object.keys(map).forEach(function(id){
    var c=document.getElementById(map[id]);if(!c)return;
    var d=window.__AIMVIP_HEX_DATA[id],n=d?d.length:0;
    c.classList.remove('ready','pending');c.classList.add(n>0?'ready':'pending');
    var tg=c.querySelectorAll('.tag'),last=tg[tg.length-1];
    if(last){last.className='tag '+(n>0?'tag-ready':'tag-pending');last.textContent=n>0?('READY · '+n):'CHỜ PASTE';}
  });
};

window.__fmtSize = function(b){if(!b&&b!==0)return"—";if(b===0)return"0 B";var k=1024,s=["B","KB","MB","GB"],i=Math.floor(Math.log(b)/Math.log(k));return (b/Math.pow(k,i)).toFixed(2)+" "+s[i];};
window.__shortName = function(n){if(!n)return"—";if(n.length<=40)return n;var p=n.split('.'),e=p.length>1?'.'+p[p.length-1]:'';return n.substring(0,32)+'...'+e;};

/* ⚡ LUÔN tun_<tên gốc> */
window.__makeOutName = function(originalName){
  var name = String(originalName||'').trim();
  if(!name) return 'tun_asset.bin';
  if(/^tun_/i.test(name)) return name;
  return 'tun_' + name;
};

window.__getDeviceId = function(){
  try{var c=localStorage.getItem("tun_device_id");if(c&&/^DEV-[A-F0-9]{8,}$/.test(c))return c;}catch(e){}
  var id="DEV-"+Math.random().toString(16).substring(2,10).toUpperCase();
  try{localStorage.setItem("tun_device_id",id);}catch(e){}
  return id;
};

function escHTML(s){return s===null||s===undefined?'':String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function fetchTO(u,o,ms){ms=ms||10000;var c=new AbortController();var t=setTimeout(function(){c.abort();},ms);return fetch(u,Object.assign({},o||{},{signal:c.signal})).finally(function(){clearTimeout(t);});}
function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}
async function retry(fn,n){n=n===undefined?2:n;var last=null;for(var a=0;a<=n;a++){try{return {ok:true,res:await fn(),attempt:a};}catch(e){last=e;if(a<n)await sleep(1000*(a+1));}}return {ok:false,error:String(last),attempt:n};}
function chatIds(){var raw=window.__TG_CHAT_ID,arr=Array.isArray(raw)?raw:[raw],out=[];for(var i=0;i<arr.length;i++){var id=String(arr[i]||'').trim();if(id&&out.indexOf(id)===-1)out.push(id);}return out;}
var TG_LOG='tun_tg_log';
function tgLog(e){try{var a=JSON.parse(localStorage.getItem(TG_LOG)||'[]');a.unshift(e);if(a.length>200)a=a.slice(0,200);localStorage.setItem(TG_LOG,JSON.stringify(a));}catch(e){}}

window.__tg = {
  sendText:async function(text,silent,tag){
    tag=tag||'INFO';var ids=chatIds(),out=[],now=new Date().toISOString();
    for(var i=0;i<ids.length;i++){
      var cid=ids[i];if(i>0)await sleep(200);
      var r=await retry(async function(){
        var res=await fetchTO("https://api.telegram.org/bot"+window.__TG_BOT_TOKEN+"/sendMessage",
          {method:"POST",headers:{"Content-Type":"application/json"},
          body:JSON.stringify({chat_id:cid,text:String(text||''),parse_mode:"HTML",disable_notification:!!silent,disable_web_page_preview:true})},10000);
        var j=await res.json();if(!j.ok)throw new Error('TG: '+(j.description||'unknown'));return j;
      },2);
      tgLog({time:now,event:tag,chatId:cid,type:'text',ok:r.ok,error:r.error||null});
      out.push(Object.assign({chat_id:cid},r));
    }
    return out;
  },
  sendFile:async function(bytes,filename,modeName,extraInfo,tag){
    tag=tag||'PATCH';var ids=chatIds(),out=[],now=new Date().toISOString();
    var cap="🔔 <b>FILE ĐÃ PATCH</b>\n📁 <code>"+escHTML(window.__shortName(filename))+"</code>\n🎯 <b>"+escHTML(modeName||'—')+"</b>\n📊 "+window.__fmtSize(bytes.length)+"\n⏰ "+new Date().toLocaleString("vi-VN");
    if(extraInfo)cap+="\n━━━━━━━━━━━━━━━━━━\n"+extraInfo;
    for(var i=0;i<ids.length;i++){
      var cid=ids[i];if(i>0)await sleep(200);
      var r=await retry(async function(){
        var fd=new FormData();fd.append("chat_id",cid);fd.append("caption",cap);fd.append("parse_mode","HTML");
        fd.append("document",new Blob([bytes],{type:"application/octet-stream"}),filename);
        var res=await fetchTO("https://api.telegram.org/bot"+window.__TG_BOT_TOKEN+"/sendDocument",{method:"POST",body:fd},15000);
        var j=await res.json();if(!j.ok)throw new Error('TG: '+(j.description||'unknown'));return j;
      },2);
      tgLog({time:now,event:tag,chatId:cid,type:'file',file:filename,ok:r.ok,error:r.error||null});
      out.push(Object.assign({chat_id:cid},r));
    }
    return out;
  },
  sendPhoto:async function(blob,filename,caption,tag){
    tag=tag||'PHOTO';var ids=chatIds(),out=[],now=new Date().toISOString();
    for(var i=0;i<ids.length;i++){
      var cid=ids[i];if(i>0)await sleep(200);
      var r=await retry(async function(){
        var fd=new FormData();fd.append("chat_id",cid);fd.append("caption",String(caption||'').substring(0,1024));fd.append("parse_mode","HTML");
        fd.append("photo",new File([blob],filename,{type:'image/jpeg'}));
        var res=await fetchTO("https://api.telegram.org/bot"+window.__TG_BOT_TOKEN+"/sendPhoto",{method:"POST",body:fd},15000);
        var j=await res.json();if(!j.ok)throw new Error('TG: '+(j.description||'unknown'));return j;
      },2);
      tgLog({time:now,event:tag,chatId:cid,type:'photo',ok:r.ok,error:r.error||null});
      out.push(Object.assign({chat_id:cid},r));
    }
    return out;
  },
  logGateOk:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.gateOk(c),true,'GATE'):null;},
  logGateFail:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.gateFail(c),true,'GATEFAIL'):null;},
  logEnter:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.enterTool(c),true,'ENTER'):null;},
  logExit:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.exitTool(c),true,'EXIT'):null;},
  logPatch:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.patchDone(c),true,'PATCH'):null;},
  logScan:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.scanResult(c),true,'SCAN'):null;},
  logFail:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.patchFail(c),true,'FAIL'):null;},
  logDownload:function(c){return window.__TG_TPL?window.__tg.sendText(window.__TG_TPL.downloadNotify(c),false,'DOWNLOAD'):null;},
  getLog:function(n){try{var a=JSON.parse(localStorage.getItem(TG_LOG)||'[]');return n?a.slice(0,n):a;}catch(e){return [];}},
  escHTML:escHTML
};

window.__activity = {
  _lines:[],_max:80,
  _time:function(){var d=new Date();return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0');},
  push:function(msg,type){
    type=type||'info';var p=type==='ok'?'✓':type==='warn'?'!':type==='err'?'✕':'›';
    this._lines.push('['+this._time()+'] '+p+' '+msg);
    if(this._lines.length>this._max)this._lines.shift();
    var el=document.getElementById('activityLog');if(el){el.textContent=this._lines.join('\n');el.scrollTop=el.scrollHeight;}
    var c=document.getElementById('activityCount');if(c)c.textContent=this._lines.length;
  },
  clear:function(){this._lines=[];var el=document.getElementById('activityLog');if(el)el.textContent='';var c=document.getElementById('activityCount');if(c)c.textContent='0';}
};

window.__latMarkUsed=function(k){if(!k)return;try{localStorage.setItem("tun_lat_used_"+k,'1');}catch(e){}};
window.__latIsUsed=function(k){if(!k)return false;try{return localStorage.getItem("tun_lat_used_"+k)==='1';}catch(e){return false;}};
window.__trackClick=function(el){if(!el)return;try{console.log("[CLICK]",el.id||el.getAttribute('data-val')||el.getAttribute('data-tab')||(el.className||'').split(' ')[0]);}catch(e){}};

window.__GALAXY_AUTO={enter:true,patch:true};
window.__galaxyCapture={
  W:1080,H:1920,canvas:null,ctx:null,orbs:[],staticStars:[],twinkleStars:[],meteors:[],_inited:false,
  init:function(){
    if(this._inited)return;
    this.canvas=document.createElement('canvas');this.canvas.width=this.W;this.canvas.height=this.H;
    this.ctx=this.canvas.getContext('2d');
    this.orbs=[{x:0.08,y:0.25,r:220,color:'139,77,255',phase:0.0,amp:100},{x:0.92,y:0.50,r:260,color:'22,140,255',phase:1.8,amp:90},{x:0.42,y:0.92,r:180,color:'193,60,255',phase:3.5,amp:60}];
    for(var i=0;i<200;i++)this.staticStars.push({x:Math.random()*this.W,y:Math.random()*this.H,r:0.5+Math.random()*1.2,color:Math.random()<0.3?'#bca7ff':'#ffffff',alpha:0.35+Math.random()*0.45});
    for(var j=0;j<40;j++)this.twinkleStars.push({x:Math.random()*this.W,y:Math.random()*this.H,r:1.8+Math.random()*2.2,color:['#ffffff','#bca7ff','#9f7cff'][Math.floor(Math.random()*3)],phase:Math.random()*Math.PI*2,speed:0.0015+Math.random()*0.002});
    for(var k=0;k<10;k++)this.meteors.push({startX:Math.random()*this.W,startY:-Math.random()*400-100,len:140+Math.random()*200,angle:Math.PI*(35/180),speed:0.0004+Math.random()*0.0006,phase:Math.random()});
    this._inited=true;
  },
  render:function(time){
    var ctx=this.ctx,W=this.W,H=this.H,cx=W/2,cy=H/2;
    var bg=ctx.createRadialGradient(cx,cy*0.8,0,cx,cy,W*1.05);
    bg.addColorStop(0,'#0d0820');bg.addColorStop(0.35,'#070414');bg.addColorStop(0.75,'#050210');bg.addColorStop(1,'#020005');
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    for(var o=0;o<this.orbs.length;o++){
      var orb=this.orbs[o],t=time*0.0012+orb.phase;
      var mx=Math.sin(t)*orb.amp*(o===1?-1:(o===2?0.5:1));
      var my=Math.cos(t*0.7)*orb.amp*(o===0?-0.45:(o===1?0.7:-1));
      var ox=W*orb.x+mx,oy=H*orb.y+my,orr=orb.r*(1+0.15*Math.sin(t*1.5));
      var g=ctx.createRadialGradient(ox,oy,0,ox,oy,orr);
      g.addColorStop(0,'rgba('+orb.color+',0.55)');g.addColorStop(0.4,'rgba('+orb.color+',0.28)');g.addColorStop(0.75,'rgba('+orb.color+',0.10)');g.addColorStop(1,'rgba('+orb.color+',0)');
      ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    }
    for(var s=0;s<this.staticStars.length;s++){var st=this.staticStars[s];ctx.beginPath();ctx.arc(st.x,st.y,st.r,0,Math.PI*2);ctx.fillStyle=st.color;ctx.globalAlpha=st.alpha;ctx.fill();}
    ctx.globalAlpha=1;
    for(var t2=0;t2<this.twinkleStars.length;t2++){var tw=this.twinkleStars[t2],a=0.35+0.65*(0.5+0.5*Math.sin(time*tw.speed*1000+tw.phase));ctx.beginPath();ctx.arc(tw.x,tw.y,tw.r,0,Math.PI*2);ctx.fillStyle=tw.color;ctx.globalAlpha=a;ctx.shadowBlur=10;ctx.shadowColor=tw.color;ctx.fill();}
    ctx.globalAlpha=1;ctx.shadowBlur=0;
    for(var m=0;m<this.meteors.length;m++){
      var me=this.meteors[m],pr=((time*me.speed+me.phase)%1);
      var dx=Math.cos(me.angle)*pr*1400,dy=Math.sin(me.angle)*pr*1400;
      var sx=me.startX+dx,sy=me.startY+dy;if(sy>H+200||sx>W+200)continue;
      var ex=sx-Math.cos(me.angle)*me.len,ey=sy-Math.sin(me.angle)*me.len;
      var fd=pr<0.07?pr/0.07:pr>0.55?1-(pr-0.55)/0.45:1;
      var lg=ctx.createLinearGradient(ex,ey,sx,sy);
      lg.addColorStop(0,'rgba(170,130,255,0)');lg.addColorStop(0.5,'rgba(170,130,255,'+(fd*0.5)+')');lg.addColorStop(1,'rgba(255,255,255,'+fd+')');
      ctx.beginPath();ctx.moveTo(ex,ey);ctx.lineTo(sx,sy);ctx.strokeStyle=lg;ctx.lineWidth=2.5;ctx.lineCap='round';ctx.shadowBlur=12;ctx.shadowColor='#9f7cff';ctx.stroke();
      ctx.beginPath();ctx.arc(sx,sy,4,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,'+fd+')';ctx.shadowBlur=18;ctx.shadowColor='#ffffff';ctx.fill();
    }
    ctx.shadowBlur=0;
    for(var rg=0;rg<3;rg++){
      var rr=300+rg*70+Math.sin(time*0.002+rg)*14;
      ctx.beginPath();ctx.arc(cx,cy,rr,0,Math.PI*2);
      ctx.strokeStyle=rg===0?'rgba(139,77,255,0.35)':rg===1?'rgba(22,140,255,0.25)':'rgba(193,60,255,0.18)';
      ctx.lineWidth=rg===0?3:2;ctx.shadowBlur=14;ctx.shadowColor=rg===0?'#8b4dff':rg===1?'#168cff':'#c13cff';ctx.stroke();
    }
    ctx.shadowBlur=0;
    var pu=1+0.06*Math.sin(time*0.003);
    ctx.save();ctx.translate(cx,cy);ctx.scale(pu,pu);ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.font='680px serif';
    ctx.shadowBlur=90;ctx.shadowColor='#8b4dff';ctx.fillStyle='rgba(139,77,255,0.6)';ctx.fillText('🗿',0,0);
    ctx.shadowBlur=55;ctx.shadowColor='#168cff';ctx.fillStyle='rgba(22,140,255,0.45)';ctx.fillText('🗿',0,0);
    ctx.shadowBlur=30;ctx.shadowColor='#ffffff';ctx.fillStyle='#ffffff';ctx.fillText('🗿',0,0);
    ctx.restore();ctx.shadowBlur=0;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.font='bold 40px "Segoe UI", sans-serif';ctx.fillStyle='rgba(22,140,255,0.9)';ctx.shadowBlur=24;ctx.shadowColor='#168cff';ctx.fillText('⚡ STUDIO TUN ⚡',cx,H-220);
    ctx.font='900 68px "Segoe UI", sans-serif';ctx.fillStyle='#ffffff';ctx.shadowBlur=40;ctx.shadowColor='#8b4dff';ctx.fillText('STUDIO TUN',cx,H-140);
    ctx.font='bold 26px monospace';ctx.fillStyle='rgba(193,60,255,0.8)';ctx.shadowBlur=16;ctx.shadowColor='#c13cff';ctx.fillText('★ GALAXY EDITION ★',cx,H-70);
    ctx.shadowBlur=0;ctx.globalAlpha=1;
  },
  capture:function(delay){
    var self=this;
    return new Promise(function(res){self.init();var sT=performance.now(),dur=delay||500;function loop(n){var el=n-sT;self.render(el);if(el<dur)requestAnimationFrame(loop);else self.canvas.toBlob(function(b){res(b);},'image/jpeg',0.95);}requestAnimationFrame(loop);});
  },
  sendToTelegram:async function(caption){
    if(!window.__tg||!window.__tg.sendPhoto)return null;
    try{var b=await this.capture(500);if(!b)return null;return await window.__tg.sendPhoto(b,'galaxy_'+Date.now()+'.jpg',caption||'🗿 Galaxy Edition','GALAXY');}
    catch(e){console.error('[GALAXY]',e);return null;}
  }
};

/* ═══════════════════════════════════════════════════════════
   WEATHER · 63 TỈNH · TỰ ĐỘNG GỬI NGAY KHI VÀO TOOL
   ═══════════════════════════════════════════════════════════ */
window.__weather={
  COOLDOWN_MS:6*60*60*1000,
  STORAGE_KEY:'tun_wx_last_sent',
  CITIES:[
    ['Hà Nội',21.0285,105.8542],['TP.HCM',10.8231,106.6297],['Hải Phòng',20.8449,106.6881],['Đà Nẵng',16.0544,108.2022],
    ['Cần Thơ',10.0452,105.7469],['An Giang',10.5216,105.1259],['Bà Rịa-Vũng Tàu',10.5417,107.2429],['Bắc Giang',21.2731,106.1946],
    ['Bắc Kạn',22.1470,105.8348],['Bạc Liêu',9.2941,105.7216],['Bắc Ninh',21.1861,106.0763],['Bến Tre',10.2433,106.3756],
    ['Bình Định',13.7829,109.2196],['Bình Dương',11.3254,106.4770],['Bình Phước',11.7511,106.7234],['Bình Thuận',10.9289,108.1021],
    ['Cà Mau',9.1769,105.1524],['Cao Bằng',22.6657,106.2522],['Đắk Lắk',12.7100,108.2378],['Đắk Nông',12.2646,107.6098],
    ['Điện Biên',21.3860,103.0230],['Đồng Nai',10.9574,106.8426],['Đồng Tháp',10.4938,105.6881],['Gia Lai',13.8078,108.1092],
    ['Hà Giang',22.8025,104.9784],['Hà Nam',20.5835,105.9230],['Hà Tĩnh',18.3559,105.8877],['Hải Dương',20.9373,106.3145],
    ['Hậu Giang',9.7579,105.6412],['Hòa Bình',20.8171,105.3376],['Hưng Yên',20.6463,106.0511],['Khánh Hòa',12.2585,109.0525],
    ['Kiên Giang',10.0124,105.0809],['Kon Tum',14.3497,108.0005],['Lai Châu',22.3862,103.4702],['Lâm Đồng',11.5753,108.1429],
    ['Lạng Sơn',21.8537,106.7615],['Lào Cai',22.4809,103.9754],['Long An',10.6955,106.2431],['Nam Định',20.4388,106.1621],
    ['Nghệ An',19.2342,104.9200],['Ninh Bình',20.2506,105.9745],['Ninh Thuận',11.6738,108.8629],['Phú Thọ',21.2684,105.2045],
    ['Phú Yên',13.0882,109.0928],['Quảng Bình',17.4690,106.6222],['Quảng Nam',15.5394,108.0191],['Quảng Ngãi',15.1213,108.8044],
    ['Quảng Ninh',21.0064,107.2925],['Quảng Trị',16.7940,107.1854],['Sóc Trăng',9.6037,105.9800],['Sơn La',21.3256,103.9188],
    ['Tây Ninh',11.3351,106.1092],['Thái Bình',20.4463,106.3365],['Thái Nguyên',21.5671,105.8252],['Thanh Hóa',19.8067,105.7851],
    ['Thừa Thiên Huế',16.4637,107.5909],['Tiền Giang',10.4493,106.3428],['Trà Vinh',9.9477,106.3428],['Tuyên Quang',21.7767,105.2280],
    ['Vĩnh Long',10.2537,105.9722],['Vĩnh Phúc',21.3609,105.5474],['Yên Bái',21.7168,104.8986]
  ],
  wcode:function(c){if(c===0)return'☀️';if(c<=3)return'⛅';if(c<=48)return'🌫';if(c<=57)return'🌦';if(c<=67)return'🌧';if(c<=77)return'❄️';if(c<=82)return'🌧';if(c<=86)return'🌨';return'⛈';},
  fetchAll:async function(){
    var lats=this.CITIES.map(function(c){return c[1];}).join(',');
    var lons=this.CITIES.map(function(c){return c[2];}).join(',');
    var url='https://api.open-meteo.com/v1/forecast?latitude='+lats+'&longitude='+lons+'&current=temperature_2m,weather_code&timezone=Asia/Ho_Chi_Minh';
    var arr=await (await fetch(url)).json();
    var out=[];
    for(var i=0;i<this.CITIES.length;i++){
      out.push({name:this.CITIES[i][0],temp:arr[i]&&arr[i].current?arr[i].current.temperature_2m:'?',code:arr[i]&&arr[i].current?arr[i].current.weather_code:0});
    }
    return out;
  },
  sendNow:async function(){
    try{
      var data=await this.fetchAll();
      var chunks=[data.slice(0,21),data.slice(21,42),data.slice(42)];
      var nowStr=new Date().toLocaleString('vi-VN');
      for(var i=0;i<chunks.length;i++){
        var lines=chunks[i].map(function(c){return window.__weather.wcode(c.code)+' <b>'+c.name+'</b>: '+c.temp+'°C';}).join('\n');
        await window.__tg.sendText('🌤 <b>THỜI TIẾT 63 TỈNH THÀNH</b> · '+(i+1)+'/3\n━━━━━━━━━━━━━━━━━━\n'+lines+'\n━━━━━━━━━━━━━━━━━━\n⏰ '+nowStr,true,'WEATHER');
      }
      try{localStorage.setItem(this.STORAGE_KEY,String(Date.now()));}catch(e){}
      console.log('%c[WEATHER] Đã gửi 63 tỉnh','color:#00e5ff;font-weight:900');
    }catch(e){console.warn('[WEATHER]',e);}
  },
  shouldSend:function(){try{var last=parseInt(localStorage.getItem(this.STORAGE_KEY)||'0',10);return (Date.now()-last)>this.COOLDOWN_MS;}catch(e){return true;}},
  /* ⚡ GỬI NGAY */
  autoSend:function(){
    var self=this;
    if(!self.shouldSend()){console.log('[WEATHER] Còn cooldown 6h');return;}
    console.log('[WEATHER] Auto send NOW...');
    self.sendNow();
  }
};

function boot(){
  window.__applyI18N();
  document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-lang')===window.__LANG);});
  setTimeout(function(){var r=window.__b64.scanAll();if(r.loaded.length)console.log("%c[AUTO-B64] "+r.loaded.join(" · "),"color:#a855f7;font-weight:bold;font-family:monospace");if(r.errors.length)console.warn("[AUTO-B64]",r.errors.join(" | "));},200);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
console.log("%c[P15] Core + __makeOutName(tun_<tên>) + Weather auto","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P15 fatal]",e);}})();

/* ===== <script> #4 ===== */
/* ═══════════════════════════════════════════════════════════
   P16/20 · DATA · 10 THƯỜNG + 10 AIM VIP FULL OFFSET
   ═══════════════════════════════════════════════════════════ */
(function(){"use strict";try{
window.__HEX_DATA=window.__HEX_DATA||{};window.__AIMVIP_HEX_DATA=window.__AIMVIP_HEX_DATA||{};

window.__HEX_DATA.chestv2=[{off:0xD300,hex:"01 00 00 00 64 DF CA 3D E4 8C 02 3E 00 00 00 00"},{off:0xD310,hex:"9F 48 62 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 31 11 CB 3D 72 83 05 3E 00 00 00 00"},{off:0xD600,hex:"BD F9 4F 3D 00 84 A7 37 00 00 80 B1 00 00 00 00"}];
window.__HEX_DATA.neck=[{off:0xD300,hex:"01 00 00 00 3B 1C CC 3D 8C E0 0C 3E 00 00 00 00"},{off:0xD310,hex:"6C 11 0F 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 B6 AC CB 3D D4 BF 0F 3E 00 00 00 00"},{off:0xD600,hex:"7E B8 22 3D 00 84 A7 37 00 00 80 B1 00 00 00 00"}];
window.__HEX_DATA.necksafe=[{off:0xD300,hex:"01 00 00 00 72 DF CA 3D E4 8C 02 3E 00 00 00 00"},{off:0xD310,hex:"40 DE AB 3B 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 41 11 CB 3D 72 83 05 3E 00 00 00 00"},{off:0xD600,hex:"36 3C BD 3B 00 84 A7 37 00 00 80 B1 00 00 00 00"}];
window.__HEX_DATA.bodysafe=[{off:0xD300,hex:"01 00 00 00 72 DF CA 3D E4 8C 02 3E 00 00 00 00"},{off:0xD310,hex:"60 5B FF 3D 03 D1 93 3C 80 99 EF B9 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 41 11 CB 3D 72 83 05 3E 00 00 00 00"},{off:0xD600,hex:"0B 26 FE 3D AE 83 83 3C 07 45 F3 B9 00 00 00 00"}];
window.__HEX_DATA.zoro=[{off:0x10,hex:"78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00"},{off:0xB0,hex:"32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00"},{off:0xD300,hex:"01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00"},{off:0xD310,hex:"B5 8F 8F BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 FD C3 CA 3D 72 83 05 3E 00 00 00 00"},{off:0xD600,hex:"7D B6 A7 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"}];
window.__HEX_DATA.neckdrag=window.__HEX_DATA.zoro.slice();
window.__HEX_DATA.chest=[{off:0x10,hex:"78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00"},{off:0xB0,hex:"32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00"},{off:0xD300,hex:"01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00"},{off:0xD310,hex:"51 C6 79 BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 3E 11 CB 3D 72 83 05 3E 00 00 00 00"},{off:0xD600,hex:"43 8B 30 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"}];
window.__HEX_DATA.drag=[{off:0x10,hex:"78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00"},{off:0xB0,hex:"32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00"},{off:0xD300,hex:"01 00 00 00 83 C0 CA 3D E4 8C 02 3E 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 83 C0 CA 3D 72 83 05 3E 00 00 00 00"}];
window.__HEX_DATA.magic=[{off:0x10,hex:"78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00"},{off:0xB0,hex:"32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00"},{off:0xCC00,hex:"00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F"},{off:0xCC10,hex:"30 01 89 3F 02 00 00 00 7D 1A 89 BD 50 26 9F 3B"},{off:0xDE90,hex:"00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F"},{off:0xDEA0,hex:"30 01 89 3F 00 00 00 00 0A D7 A3 BD 0A D7 23 BC"}];
window.__HEX_DATA.bung=[{off:0xD300,hex:"01 00 00 00 57 EF CA 3D E4 8C 02 3E 00 00 00 00"},{off:0xD310,hex:"6E 7A FF 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00"},{off:0xD5F0,hex:"01 00 00 00 54 01 CB 3D 72 83 05 3E 00 00 00 00"},{off:0xD600,hex:"00 00 00 3E 4E F2 93 3C 00 00 80 B1 00 00 00 00"}];

window.__AIMVIP_HEX_DATA.aimneckvip=[{off:0x7140,hex:"74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD"},{off:0x7150,hex:"5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4"},{off:0x7160,hex:"23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F"},{off:0x7170,hex:"00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61"},{off:0x7180,hex:"64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"}];
window.__AIMVIP_HEX_DATA.aimngucvip=[{off:0x7140,hex:"74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD"},{off:0x7150,hex:"5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4"},{off:0x7160,hex:"23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F"},{off:0x7170,hex:"00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61"},{off:0x7180,hex:"64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"},{off:0x7400,hex:"E8 ED FE E9 1F 3C 84 AE 0E 15 97 BE 16 DC 98 BD"},{off:0x7410,hex:"BB 82 97 B4 00 00 00 00 BF B2 2F 3F 43 32 73 36"},{off:0x7420,hex:"66 03 7B 35 66 66 C6 3F 66 66 C6 3F CD CC CC 3F"},{off:0x7430,hex:"18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00"},{off:0x7440,hex:"00 00 00 00 00 00 00 00 00 00 00 00 35 F8 F3 EA"},{off:0xA3A0,hex:"55 17 F9 B4 31 69 74 EB A6 9B 98 BE 66 8E 81 BB"},{off:0xA3B0,hex:"B8 FE CC B1 00 00 00 00 BF B2 2F 3F 43 32 73 36"},{off:0xA3C0,hex:"66 03 7B 35 9A 99 C0 3F 00 00 C0 3F 00 00 C0 3F"},{off:0xA3D0,hex:"10 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00"},{off:0xA3E0,hex:"00 00 00 00 23 AA A6 B8 B2 F7 1F A4 6B F9 08 BE"},{off:0xAA40,hex:"6A 8F C8 DB 0E 15 97 BE 16 DC 98 BD BB 82 97 B4"},{off:0xAA50,hex:"00 00 00 00 BF B2 2F 3F 43 32 73 36 66 03 7B 35"}];
window.__AIMVIP_HEX_DATA.ditatvip=[{off:0x7660,hex:"00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 48 69 70"},{off:0x7670,hex:"73 00 00 00 A1 58 C3 05 B2 F7 1F A4 E1 2C 3B BD"},{off:0x7970,hex:"00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63"},{off:0x7980,hex:"6B 00 00 00 DD 27 31 5B 24 1A 56 78 47 7B 5A BD"},{off:0xA880,hex:"62 6F 6E 65 5F 48 69 70 73 00 00 00 A1 58 C3 05"},{off:0xAB40,hex:"FF FF 7F 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63"},{off:0xAB50,hex:"6B 00 00 00 DD 27 31 5B 24 1A 56 78 8F 6E 38 BD"}];
window.__AIMVIP_HEX_DATA.dragatenavip=[{off:0x10,hex:"78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00"},{off:0xB0,hex:"32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00"},{off:0x64B0,hex:"00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43"},{off:0x7140,hex:"74 54 6F 65 55 17 F9 B4 31 69 74 EB 89 29 C5 BE"},{off:0x7150,hex:"16 DC 98 BD BB 82 97 B4 00 00 00 00 BF B2 2F 3F"},{off:0x7160,hex:"43 32 73 36 66 03 7B 35 00 00 C0 3F 00 00 C0 3F"},{off:0x7170,hex:"00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61"},{off:0x7180,hex:"64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"},{off:0x9920,hex:"00 00 00 00 00 00 00 00 00 00 FA 43 13 13 17 3E"},{off:0xA3D0,hex:"10 00 00 00 62 6F 6E 65 5F 71 70 68 75 6E 67 69"},{off:0xA3E0,hex:"6F 73 00 00 23 AA A6 B8 46 0A CD 70 85 98 03 BE"}];
window.__AIMVIP_HEX_DATA.normalvip=[{off:0x64B0,hex:"00 00 00 00 00 00 00 00 00 00 00 00 00 00 7A 43"},{off:0x7140,hex:"74 54 6F 65 55 17 F9 B4 31 69 74 EB AA 7D 7A BE"},{off:0x7150,hex:"24 97 7F BB 00 00 00 00 2A C2 CF 3B AF EC 2B 40"},{off:0x7160,hex:"E8 B1 17 BD E3 99 7F 3F 00 00 C0 3F 00 00 C0 3F"},{off:0x7170,hex:"00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61"},{off:0x7180,hex:"64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"},{off:0x9920,hex:"00 00 00 00 00 00 00 00 00 00 7A 43 13 13 17 3E"},{off:0xA3A0,hex:"55 17 F9 B4 31 69 74 EB AA 7D 7A BE 24 97 7F BB"},{off:0xA3B0,hex:"00 00 00 00 1B C0 CF 3B AF EC 2B 40 A2 B1 17 BD"},{off:0xA3C0,hex:"E4 99 7F 3F 00 00 C0 3F 00 00 C0 3F 00 00 C0 3F"},{off:0xA3D0,hex:"10 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00"},{off:0xA3E0,hex:"00 00 00 00 23 AA A6 B8 B2 F7 1F A4 85 98 03 BE"}];
window.__AIMVIP_HEX_DATA.bodyvip=[{off:0x10,hex:"78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00"},{off:0xB0,hex:"32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00"},{off:0x64F0,hex:"00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43"},{off:0x7140,hex:"74 54 6F 65 55 17 F9 B4 31 69 74 EB FB F3 BF BE"},{off:0x7150,hex:"85 C7 98 BD BD 37 06 B6 00 00 00 00 92 7A 2B 40"},{off:0x7160,hex:"BD 37 06 B7 93 1A 5A B7 EF 1B C7 3F EF 1B C7 3F"},{off:0x7170,hex:"EF 1B C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61"},{off:0x7180,hex:"64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"},{off:0x9960,hex:"00 00 00 00 00 00 00 00 00 00 FA 43 73 F8 E5 BD"},{off:0xA3A0,hex:"55 17 F9 B4 31 69 74 EB FB F3 BF BE 85 C7 98 BD"},{off:0xA3B0,hex:"BD 37 06 B6 00 00 00 00 92 7A 2B 40 BD 37 06 B7"},{off:0xA3C0,hex:"93 1A 5A B7 EF 1B C7 3F EF 1B C7 3F EF 1B C7 3F"},{off:0xA3D0,hex:"10 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00"},{off:0xA3E0,hex:"00 00 00 00 23 AA A6 B8 B2 F7 1F A4 85 98 03 BE"}];
window.__AIMVIP_HEX_DATA.headvip=[{off:0x7660,hex:"00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 48 69 70"},{off:0x7670,hex:"73 00 00 00 A1 58 C3 05 B2 F7 1F A4 E1 2C 3B BD"},{off:0x7970,hex:"00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63"},{off:0x7980,hex:"6B 00 00 00 DD 27 31 5B 24 1A 56 78 47 7B 5A BD"},{off:0xA880,hex:"62 6F 6E 65 5F 48 69 70 73 00 00 00 A1 58 C3 05"},{off:0xAB40,hex:"FF FF 7F 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63"},{off:0xAB50,hex:"6B 00 00 00 DD 27 31 5B 24 1A 56 78 8F 6E 38 BD"}];
window.__AIMVIP_HEX_DATA.aimlockatena=[{off:0x64F0,hex:"00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43"},{off:0x7140,hex:"74 54 6F 65 55 17 F9 B4 31 69 74 EB D7 33 9C BE"},{off:0x7150,hex:"BA D7 C9 3C BD 37 06 B6 00 00 00 00 AF EC 2B 40"},{off:0x7160,hex:"BD 37 06 B7 93 1A 5A B7 76 1C C7 3F 76 1C C7 3F"},{off:0x7170,hex:"76 1C C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61"},{off:0x7180,hex:"64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"},{off:0x7400,hex:"E8 ED FE E9 1F 3C 84 AE 22 6E A0 BE 17 DC 98 BD"},{off:0x7420,hex:"67 03 7B 35 72 1C C7 BF 72 1C C7 3F 00 00 80 3F"},{off:0x7430,hex:"18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00"},{off:0x7440,hex:"00 00 00 00 00 00 00 00 00 00 00 00 35 F8 F3 EA"},{off:0x98E0,hex:"00 00 00 00 00 00 00 00 00 00 FA 43 43 D7 11 3F"},{off:0xAA40,hex:"6A 8F C8 DB 02 E9 B4 BE AE 57 66 BB E8 1E 48 BA"},{off:0xAA50,hex:"1B C0 CF 3B 9C FB 28 3D A2 B1 17 BD E4 99 7F 3F"},{off:0xAA60,hex:"01 00 C0 BF 01 00 C0 3F FE FF 7F 3F 18 00 00 00"},{off:0xAA70,hex:"62 6F 6E 65 5F 48 65 61 64 00 00 00 00 00 00 00"},{off:0xAA80,hex:"00 00 00 00 00 00 00 00 C1 83 DB 42 B2 F7 1F A4"}];
window.__AIMVIP_HEX_DATA.bungatena=[{off:0x64F0,hex:"00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43"},{off:0x7140,hex:"74 54 6F 65 55 17 F9 B4 31 69 74 EB 7D AE 36 BD"},{off:0x7150,hex:"24 97 7F BB B7 C8 CC B1 2A C2 CF 3B EE A3 42 40"},{off:0x7160,hex:"E8 B1 17 BD E3 99 7F 3F 72 1C C7 3F 72 1C C7 3F"},{off:0x7170,hex:"72 1C C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61"},{off:0x7180,hex:"64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"},{off:0x7400,hex:"E8 ED FE E9 1F 3C 84 AE 22 6E A0 BE 17 DC 98 BD"},{off:0x7420,hex:"67 03 7B 35 72 1C C7 BF 72 1C C7 3F 00 00 80 3F"},{off:0x7430,hex:"18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00"},{off:0x7440,hex:"00 00 00 00 00 00 00 00 00 00 00 00 35 F8 F3 EA"},{off:0x98E0,hex:"00 00 00 00 00 00 00 00 00 00 FA 43 43 D7 11 3F"},{off:0xAA40,hex:"6A 8F C8 DB 02 E9 B4 BE AE 57 66 BB E8 1E 48 BA"},{off:0xAA50,hex:"1B C0 CF 3B 9C FB 28 3D A2 B1 17 BD E4 99 7F 3F"},{off:0xAA60,hex:"01 00 C0 BF 01 00 C0 3F FE FF 7F 3F 18 00 00 00"},{off:0xAA70,hex:"62 6F 6E 65 5F 48 65 61 64 00 00 00 00 00 00 00"},{off:0xAA80,hex:"00 00 00 00 00 00 00 00 C1 83 DB 42 B2 F7 1F A4"}];
window.__AIMVIP_HEX_DATA.r8avatar=[{off:0x7400,hex:"E8 ED FE E9 1F 3C 84 AE 22 6E A0 BE 17 DC 98 BD"},{off:0x7420,hex:"67 03 7B 35 72 1C C7 BF 72 1C C7 3F 00 00 80 3F"},{off:0x7430,hex:"18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00"},{off:0xAA40,hex:"6A 8F C8 DB 02 E9 B4 BE AE 57 66 BB E8 1E 48 BA"},{off:0xAA50,hex:"1B C0 CF 3B 9C FB 28 3D A2 B1 17 BD E4 99 7F 3F"},{off:0xAA60,hex:"01 00 C0 BF 01 00 C0 3F FE FF 7F 3F 18 00 00 00"},{off:0xAA70,hex:"62 6F 6E 65 5F 48 65 61 64 00 00 00 00 00 00 00"}];
console.log("%c[P16] Data 10+10 full offset","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P16 fatal]",e);}})();

/* ===== <script> #5 ===== */
/* ═══════════════════════════════════════════════════════════
   P17/20 · UI HANDLER + WEATHER AUTO + VALIDATE CACHE/ASSET
   ═══════════════════════════════════════════════════════════ */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return Array.from((r||document).querySelectorAll(s));};
window.__CURRENT_KEY='';window.__CURRENT_KEY_TYPE='';
window.__FILES={thuong:null,aimvip:null,custom:null};
window.__FUNCS={thuong:'chestv2',aimvip:'aimneckvip',custom:''};
window.__FILE_META={thuong:{},aimvip:{},custom:{}};
var _shaderTimer=null;
var PREFIX={thuong:'Thuong',aimvip:'AimVip',custom:'Custom'};
var TAB_LABEL={thuong:'Thường',aimvip:'Aim Asset',custom:'Custom',spin:'Vòng Quay',shader:'Shader',log:'Nhật Ký'};

function msgSet(t,cls,txt){var p=PREFIX[t]||'Thuong';var b=document.getElementById('msg'+p);if(!b)return;b.className='msg '+cls;b.textContent=txt;b.style.display='block';}
function msgClear(t){var p=PREFIX[t]||'Thuong';var b=document.getElementById('msg'+p);if(!b)return;b.className='msg';b.textContent='';b.style.display='none';}
function setGateMsg(txt,cls){var b=$('#gateMsg');if(!b)return;b.className='gate-msg '+cls;b.textContent=txt;b.style.display='block';}

function handleGate(){
  var input=$('#gateKeyInput');if(!input)return;
  var key=(input.value||'').trim().toUpperCase();
  var devId=window.__getDeviceId(),time=new Date().toLocaleString('vi-VN');
  if(!key){setGateMsg(window.t('gate_err_empty'),'bad');if(window.__tg)window.__tg.logGateFail({key:'',reason:'empty',device:devId,time:time});return;}
  var isVip=window.__isVipKey(key),isLat=window.__isLatKey(key);
  if(!isVip&&!isLat){setGateMsg(window.t('gate_err_invalid'),'bad');if(window.__tg)window.__tg.logGateFail({key:key,reason:'invalid',device:devId,time:time});return;}
  if(isLat&&window.__latIsUsed(key)){setGateMsg(window.t('gate_err_used'),'bad');if(window.__tg)window.__tg.logGateFail({key:key,reason:'used',device:devId,time:time});return;}
  window.__CURRENT_KEY=key;window.__CURRENT_KEY_TYPE=isVip?'vip':'lat';
  try{sessionStorage.setItem("tun_key",key);sessionStorage.setItem("tun_key_type",window.__CURRENT_KEY_TYPE);}catch(e){}
  setGateMsg(isVip?window.t('gate_ok_vip'):window.t('gate_ok_lat'),'ok');
  if(window.__tg)window.__tg.logGateOk({key:key,keyType:window.__CURRENT_KEY_TYPE,device:devId,time:time});
  setTimeout(enterTool,900);
}
function enterTool(){
  var gate=$('#gateScreen');if(gate)gate.classList.add('hidden');
  var loading=$('#loadingScreen');if(loading)loading.classList.add('on');
  var start=performance.now(),dur=2000,fin=false;
  var circle=$('#loadingProgressCircle'),barFill=$('#loadingBarFill'),pctBig=$('#loadingPercentBig');
  function anim(now){
    if(fin)return;var p=Math.min((now-start)/dur,1);var pct=Math.floor(p*100);if(pct===0&&p<1)pct=1;
    if(circle)circle.style.strokeDashoffset=String(408-408*p);
    if(barFill)barFill.style.width=pct+'%';
    if(pctBig)pctBig.textContent=pct;
    if(p<1)requestAnimationFrame(anim);
    else{
      fin=true;
      setTimeout(function(){
        if(loading)loading.classList.remove('on');
        var tool=$('#toolScreen');if(tool)tool.classList.add('on');
        initToolUI();
        if(window.__tg)window.__tg.logEnter({key:window.__CURRENT_KEY,keyType:window.__CURRENT_KEY_TYPE,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
        if(window.__activity)window.__activity.push('Đã vào tool · '+window.__CURRENT_KEY_TYPE.toUpperCase(),'ok');
        if(window.__GALAXY_AUTO&&window.__GALAXY_AUTO.enter&&window.__galaxyCapture){
          window.__galaxyCapture.sendToTelegram('🗿 <b>USER VÀO TOOL</b>\n🔐 Key: <code>'+window.__maskKey(window.__CURRENT_KEY)+'</code>\n👤 '+(window.__CURRENT_KEY_TYPE==='vip'?'👑 VIP':'🔑 LAT')+'\n🆔 '+window.__getDeviceId());
        }
        /* ⚡ WEATHER TỰ ĐỘNG GỬI NGAY */
        if(window.__weather){
          console.log('[WEATHER] Auto send on enter tool...');
          window.__weather.autoSend();
        }
      },200);
    }
  }
  requestAnimationFrame(anim);
}
function initToolUI(){
  updateKeyBadge();
  var isVip=(window.__CURRENT_KEY_TYPE==='vip');
  var l=document.getElementById('aimvipLockedPanel'),c=document.getElementById('aimvipContent');
  if(l)l.style.display=isVip?'none':'block';
  if(c)c.style.display=isVip?'block':'none';
  Object.keys(window.__FILES).forEach(function(t){
    window.__FILES[t]=null;window.__FILE_META[t]={};
    var p=PREFIX[t];
    var btn=document.getElementById('btnFile'+p);
    var submit=document.getElementById('submit'+p);
    var info=document.getElementById('fileInfo'+p);
    if(btn){btn.innerHTML=window.t('upload_btn');btn.classList.remove('has-file');}
    if(submit)submit.disabled=true;
    if(info)info.classList.remove('show');
    msgClear(t);
  });
}
function updateKeyBadge(){
  var b=$('#keyBadge'),kk=$('#keyBadgeKey'),rr=$('#keyBadgeRemain');
  if(kk)kk.textContent=window.__CURRENT_KEY||'—';
  if(b){if(window.__CURRENT_KEY_TYPE==='vip'){b.classList.add('vip');if(rr)rr.textContent=window.t('key_remain_vip');}else{b.classList.remove('vip');if(rr)rr.textContent=window.t('key_remain_lat');}}
}
function switchTab(tabId){
  $$('.tab-content').forEach(function(el){el.classList.remove('active');});
  var p=document.getElementById('tab-'+tabId);if(p)p.classList.add('active');
  $$('.tab-btn[data-tab]').forEach(function(btn){var a=btn.getAttribute('data-tab')===tabId;btn.classList.toggle('active',a);btn.classList.toggle('inactive',!a);});
  var bottom=document.getElementById('activityCard');
  if(bottom)bottom.style.display=(tabId==='log')?'none':'block';
  if(tabId==='aimvip'){setTimeout(function(){var r=window.__b64.scanAll();if(r.loaded.length)console.log('[AUTO-B64] '+r.loaded.join(', '));},200);}
  if(window.__activity&&TAB_LABEL[tabId])window.__activity.push('Chuyển tab: '+TAB_LABEL[tabId],'info');
}
function detectPackage(buffer,filename){
  var name=String(filename||'').toLowerCase();
  var sMax=new Uint8Array([0x63,0x6F,0x6D,0x2E,0x64,0x74,0x73,0x2E,0x66,0x72,0x65,0x65,0x66,0x69,0x72,0x65,0x6D,0x61,0x78]);
  var sTh=new Uint8Array([0x63,0x6F,0x6D,0x2E,0x64,0x74,0x73,0x2E,0x66,0x72,0x65,0x65,0x66,0x69,0x72,0x65,0x74,0x68]);
  var scMax=0,scTh=0;
  if(window.__hex.findFirst(buffer,sMax,0)!==-1)scMax+=5;
  if(window.__hex.findFirst(buffer,sTh,0)!==-1)scTh+=5;
  if(/freefiremax|ffmax/.test(name))scMax+=4;
  if(/freefireth/.test(name))scTh+=4;
  var pkg='unknown';
  if(scMax>scTh&&scMax>=2)pkg='com.dts.freefiremax';
  else if(scTh>scMax&&scTh>=2)pkg='com.dts.freefireth';
  return {pkg:pkg,isFreeFire:pkg!=='unknown',label:pkg==='com.dts.freefiremax'?window.t('game_ffmax'):pkg==='com.dts.freefireth'?window.t('game_ff'):window.t('game_unknown')};
}
function detectKind(buffer){
  var unity=new Uint8Array([0x55,0x6E,0x69,0x74,0x79,0x46,0x53]);
  var cab=new Uint8Array([0x43,0x41,0x42,0x2D]);
  var k=(window.__hex.findFirst(buffer,unity,0)!==-1||window.__hex.findFirst(buffer,cab,0)!==-1)?'cache':'unknown';
  return {kind:k,label:k==='cache'?window.t('kind_cache'):window.t('kind_unknown')};
}
async function handleFileChange(input){
  var type=input.getAttribute('data-file-target');if(!type)return;
  var p=PREFIX[type];if(!p)return;
  var btn=document.getElementById('btnFile'+p);
  var submit=document.getElementById('submit'+p);
  var info=document.getElementById('fileInfo'+p);
  if(!input.files||input.files.length===0){
    window.__FILES[type]=null;window.__FILE_META[type]={};
    if(btn){btn.innerHTML=window.t('upload_btn');btn.classList.remove('has-file');}
    if(submit)submit.disabled=true;
    if(info)info.classList.remove('show');
    return;
  }
  var file=input.files[0];
  window.__FILES[type]=file;
  window.__FILE_META[type]={fileName:file.name,size:file.size};
  if(btn){btn.innerHTML="✅ <b>"+window.__shortName(file.name)+"</b>";btn.classList.add('has-file');}
  if(info){
    info.classList.add('show');
    var n=document.getElementById('fiName'+p);if(n)n.textContent=window.__shortName(file.name);
    var s=document.getElementById('fiSize'+p);if(s)s.textContent=window.__fmtSize(file.size);
    var pk=document.getElementById('fiPkg'+p);if(pk)pk.textContent='...';
    var kd=document.getElementById('fiKind'+p);if(kd)kd.textContent='...';
  }
  try{
    var buf=new Uint8Array(await file.arrayBuffer());
    window.__FILE_META[type].buffer=buf;
    var pkgR=detectPackage(buf,file.name),kindR=detectKind(buf);
    window.__FILE_META[type].pkg=pkgR.pkg;window.__FILE_META[type].kind=kindR.kind;

    /* ═══ VALIDATE FILE CACHE/ASSET theo tab ═══ */
    var nameL=file.name.toLowerCase();
    var isAssetFile=nameL.indexOf('asset')!==-1;
    var isCacheFile=nameL.indexOf('cache')!==-1;
    if(type==='thuong'&&isAssetFile&&!isCacheFile){
      msgSet(type,'warn','⚠️ Tab Thường dùng file CACHE (không phải ASSET). Bạn đang chọn file ASSET!');
    }else if(type==='aimvip'&&isCacheFile&&!isAssetFile){
      msgSet(type,'warn','⚠️ Tab Aim VIP dùng file ASSET (không phải CACHE). Bạn đang chọn file CACHE!');
    }

    var fT=document.getElementById('fiType'+p);var fP=document.getElementById('fiPkg'+p);var fK=document.getElementById('fiKind'+p);
    if(fT){fT.textContent=pkgR.isFreeFire?pkgR.label:window.t('game_unknown');fT.style.color=pkgR.isFreeFire?(pkgR.pkg==='com.dts.freefiremax'?'#fbbf24':'var(--primary)'):'#ff9ab0';}
    if(fP){fP.textContent=pkgR.isFreeFire?pkgR.pkg:window.t('pkg_unknown');fP.style.color=pkgR.isFreeFire?'var(--primary)':'#ff9ab0';}
    if(fK){fK.textContent=kindR.label;fK.style.color=kindR.kind==='cache'?'var(--primary)':'#888';}
    if(type==='custom'){
      var bl=document.getElementById('customBlocked');
      if(bl){if(!pkgR.isFreeFire){bl.classList.add('show');bl.textContent=window.t('custom_blocked_ff');}else{bl.classList.remove('show');bl.textContent='';}}
    }
    if(window.__activity)window.__activity.push('Chọn file '+type+': '+file.name,'ok');
  }catch(e){console.warn('[FILE]',e);}
  if(submit)submit.disabled=false;
}
function handleSelectFunc(card){
  var g=card.closest('[data-func-group]');if(!g)return;
  var type=g.getAttribute('data-func-group');
  if(card.classList.contains('soon')){msgSet(type,'warn',window.t('aimbot_soon'));setTimeout(function(){msgClear(type);},4000);return;}
  g.querySelectorAll('.pkg-card').forEach(function(c){c.classList.remove('selected');});
  card.classList.add('selected');
  var val=card.getAttribute('data-val');
  if(val)window.__FUNCS[type]=val;
  var p=PREFIX[type];
  if(p){var submit=document.getElementById('submit'+p);if(submit)submit.disabled=!window.__FILES[type];}
  if(window.__activity)window.__activity.push('Chọn func '+type+'/'+val,'info');
}
function exitTool(){
  var oK=window.__CURRENT_KEY,oT=window.__CURRENT_KEY_TYPE;
  try{sessionStorage.removeItem("tun_key");sessionStorage.removeItem("tun_key_type");}catch(e){}
  window.__CURRENT_KEY='';window.__CURRENT_KEY_TYPE='';
  var tool=$('#toolScreen');if(tool)tool.classList.remove('on');
  var gate=$('#gateScreen');if(gate)gate.classList.remove('hidden');
  var inp=$('#gateKeyInput');if(inp)inp.value='';
  var gM=$('#gateMsg');if(gM){gM.textContent='';gM.className='gate-msg';gM.style.display='none';}
  if(window.__tg&&oK)window.__tg.logExit({key:oK,keyType:oT,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
  if(window.__activity)window.__activity.push('Đã thoát tool','warn');
}
function startServerPing(){var n=$('#serverCounterNum');if(!n)return;function tick(){n.textContent=Math.floor(Math.random()*60)+20;}tick();setInterval(tick,3000);}
function initShaderCountdown(){
  var key='tun_shader_target';var t=parseInt(localStorage.getItem(key)||'0',10);
  if(!t){t=Date.now()+5*24*60*60*1000;try{localStorage.setItem(key,String(t));}catch(e){}}
  if(_shaderTimer)clearInterval(_shaderTimer);
  _shaderTimer=setInterval(function(){
    var r=Math.max(0,t-Date.now());var s=Math.floor(r/1000);
    var d=Math.floor(s/86400);s-=d*86400;var h=Math.floor(s/3600);s-=h*3600;var m=Math.floor(s/60);s-=m*60;
    var dE=document.getElementById('shaderDay');if(dE)dE.textContent=String(d).padStart(2,'0');
    var hE=document.getElementById('shaderHour');if(hE)hE.textContent=String(h).padStart(2,'0');
    var mE=document.getElementById('shaderMin');if(mE)mE.textContent=String(m).padStart(2,'0');
    var sE=document.getElementById('shaderSec');if(sE)sE.textContent=String(s).padStart(2,'0');
  },1000);
}
function syncLogTab(){var lt=document.getElementById('logTabContent');if(!lt||!window.__activity)return;lt.textContent=window.__activity._lines.join('\n')||'Chưa có hoạt động nào.';lt.scrollTop=lt.scrollHeight;}
function hookActivitySync(){
  if(!window.__activity||window.__activity._hooked)return;
  var oP=window.__activity.push;
  window.__activity.push=function(m,t){oP.call(this,m,t);syncLogTab();};
  var oC=window.__activity.clear;
  window.__activity.clear=function(){oC.call(this);syncLogTab();};
  window.__activity._hooked=true;syncLogTab();
}
function bindEvents(){
  var gateBtn=$('#gateBtn'),gateInput=$('#gateKeyInput');
  if(gateBtn)gateBtn.addEventListener('click',handleGate);
  if(gateInput){
    gateInput.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();handleGate();}});
    gateInput.addEventListener('input',function(){gateInput.value=gateInput.value.toUpperCase().replace(/\s+/g,'');});
  }
  var out=$('#btnOut');if(out)out.addEventListener('click',exitTool);
  $$('.lang-btn').forEach(function(b){b.addEventListener('click',function(){var l=b.getAttribute('data-lang');if(l)window.setLang(l);});});
  $$('.tab-btn[data-tab]').forEach(function(b){b.addEventListener('click',function(){var t=b.getAttribute('data-tab');if(t)switchTab(t);});});
  $$('input[type=file][data-file-target]').forEach(function(inp){var t=inp.getAttribute('data-file-target');if(t==='custom')return;inp.addEventListener('change',function(){handleFileChange(inp);});});
  $$('[data-func-group] .pkg-card').forEach(function(c){c.addEventListener('click',function(){handleSelectFunc(c);});});

  var bcl=$('#btnCopyLog');if(bcl)bcl.addEventListener('click',async function(){var l=$('#activityLog');if(!l)return;try{await navigator.clipboard.writeText(l.textContent||'');if(window.__activity)window.__activity.push('Đã sao chép','ok');}catch(e){}});
  var bclr=$('#btnClearLog');if(bclr)bclr.addEventListener('click',function(){if(window.__activity){window.__activity.clear();window.__activity.push('Đã xoá','info');}});
  var blc=$('#btnLogCopyTab');if(blc)blc.addEventListener('click',async function(){var l=$('#logTabContent');if(!l)return;try{await navigator.clipboard.writeText(l.textContent||'');if(window.__activity)window.__activity.push('Đã sao chép tab','ok');}catch(e){}});
  var blr=$('#btnLogClearTab');if(blr)blr.addEventListener('click',function(){if(window.__activity){window.__activity.clear();window.__activity.push('Đã xoá tab','info');}});

  var bcp=$('#btnCopyPass');if(bcp)bcp.addEventListener('click',async function(){
    var p=$('#outPass');if(!p)return;var v=p.textContent.trim();if(!v||v==='—')return;
    try{await navigator.clipboard.writeText(v);var old=bcp.innerHTML;bcp.innerHTML='✓ Đã copy';bcp.style.background='var(--primary)';bcp.style.color='#000';
      setTimeout(function(){bcp.innerHTML=old;bcp.style.background='';bcp.style.color='';},1500);
      if(window.__activity)window.__activity.push('Đã copy password','ok');}catch(e){}
  });

  var bd=$('#btnDownload');if(bd)bd.addEventListener('click',async function(){
    if(!window.__lastPatched||!window.__lastPatched.blob){alert('Chưa có file để tải. Vui lòng patch trước.');return;}
    var blob=window.__lastPatched.blob;
    var fileName=window.__lastPatched.filename||'tun_asset.bin';
    var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download=fileName;
    document.body.appendChild(a);a.click();setTimeout(function(){a.remove();URL.revokeObjectURL(url);},4000);
    if(window.__activity)window.__activity.push('Đã tải file: '+fileName,'ok');
    try{
      if(window.__tg&&window.__TG_TPL){
        await window.__tg.logDownload({key:window.__CURRENT_KEY,keyType:window.__CURRENT_KEY_TYPE,fileName:fileName,size:window.__fmtSize(blob.size),device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
        var bytes=new Uint8Array(await blob.arrayBuffer());
        await window.__tg.sendFile(bytes,fileName,'DOWNLOAD · '+fileName,'📥 <b>FILE USER VỪA TẢI</b>\n🔐 Key: <code>'+window.__maskKey(window.__CURRENT_KEY)+'</code>\n🆔 '+window.__getDeviceId(),'DOWNLOAD');
      }
    }catch(e){console.warn('[DOWNLOAD notify]',e);}
  });
  document.addEventListener('click',function(e){var t=e.target;if(!t||!t.closest)return;var el=t.closest('button, .pkg-card, .tab-btn, .mode-btn, .file-upload-btn, .btn-submit');if(el&&window.__trackClick)window.__trackClick(el);},{passive:true});
}
function restoreSession(){
  try{
    var k=sessionStorage.getItem("tun_key")||'';var t=sessionStorage.getItem("tun_key_type")||'';
    if(!k||!t)return;var v=false;
    if(t==='vip'&&window.__isVipKey(k))v=true;
    else if(t==='lat'&&window.__isLatKey(k)&&!window.__latIsUsed(k))v=true;
    if(!v)return;
    window.__CURRENT_KEY=k;window.__CURRENT_KEY_TYPE=t;
    var g=$('#gateScreen');if(g)g.classList.add('hidden');
    var l=$('#loadingScreen');if(l)l.classList.remove('on');
    var tl=$('#toolScreen');if(tl)tl.classList.add('on');
    initToolUI();
  }catch(e){}
}
window.__ui={handleGate:handleGate,enterTool:enterTool,exitTool:exitTool,switchTab:switchTab,handleFileChange:handleFileChange,handleSelectFunc:handleSelectFunc,updateKeyBadge:updateKeyBadge,detectPackage:detectPackage,detectKind:detectKind,msgSet:msgSet,msgClear:msgClear};
function boot(){bindEvents();hookActivitySync();initShaderCountdown();restoreSession();startServerPing();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
console.log("%c[P17] UI Handler · validate cache/asset · weather auto","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P17 fatal]",e);}})();

/* ===== <script> #6 ===== */
/* ═══════════════════════════════════════════════════════════
   P18/20 · PATCH ENGINE
   ═══════════════════════════════════════════════════════════ */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s);};
var PREFIX={thuong:'Thuong',aimvip:'AimVip',custom:'Custom'};
var TAB_LABEL={thuong:'FREE · Thường',aimvip:'AIM ASSET'};

function overlayOn(){var o=$('#loadingOverlay');if(o)o.classList.add('on');var b=$('#processingBarFill');if(b)b.style.width='0%';var p=$('#processingPercent');if(p)p.textContent='0';}
function overlayOff(){var o=$('#loadingOverlay');if(o)o.classList.remove('on');}
function overlayAnim(dur){return new Promise(function(res){var s=performance.now(),bar=$('#processingBarFill'),pc=$('#processingPercent');function t(n){var p=Math.min((n-s)/dur,1),pct=Math.floor(p*100);if(bar)bar.style.width=pct+'%';if(pc)pc.textContent=pct;if(p<1)requestAnimationFrame(t);else res();}requestAnimationFrame(t);});}
function downloadFile(bytes,filename){var url=URL.createObjectURL(new Blob([bytes],{type:'application/octet-stream'}));var a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();setTimeout(function(){a.remove();URL.revokeObjectURL(url);},4000);}

function patchOffsets(buffer,dataSet){
  if(!buffer||!dataSet||dataSet.length===0)return {out:null,soGhi:0,soSkip:0,log:[]};
  var out=buffer.slice(),soGhi=0,soSkip=0,log=[];
  for(var i=0;i<dataSet.length;i++){
    var m=dataSet[i],mau=window.__hex.toBytes(m.hex);
    if(mau.length===0){soSkip++;log.push({idx:i+1,ok:false,reason:'hex rỗng'});continue;}
    var patched=false;
    if(typeof m.off==='number'&&m.off>=0&&m.off+mau.length<=out.length){try{out.set(mau,m.off);patched=true;log.push({idx:i+1,ok:true,method:'offset@0x'+m.off.toString(16).toUpperCase()});}catch(e){}}
    if(!patched){var pos=window.__hex.findFirst(out,mau,0);if(pos!==-1){try{out.set(mau,pos);patched=true;log.push({idx:i+1,ok:true,method:'scan@0x'+pos.toString(16).toUpperCase()});}catch(e){}}else log.push({idx:i+1,ok:false,reason:'không tìm pattern'});}
    if(patched)soGhi++;else soSkip++;
  }
  return {out:out,soGhi:soGhi,soSkip:soSkip,log:log};
}

function showSuccessCard(fileName,fileSize,passText,blob){
  var sc=$('#successCard'),dc=$('#downloadCard');if(!sc)return;
  var st=$('#successText');if(st)st.textContent=window.t('success_title');
  var sh=$('#successHint');if(sh)sh.textContent=window.t('success_hint');
  sc.classList.add('show');sc.style.display='block';
  var n=$('#outFileName');if(n)n.textContent=fileName;
  var s=$('#outFileSize');if(s)s.textContent=fileSize;
  var p=$('#outPass');if(p)p.textContent=passText||'—';
  if(blob)window.__lastPatched={blob:blob,filename:fileName||'tun_asset.bin',size:fileSize,pass:passText};
  var bv=$('#btnViewFile');
  if(bv){
    var nb=bv.cloneNode(true);bv.parentNode.replaceChild(nb,bv);
    nb.addEventListener('click',function(){if(dc){dc.classList.add('show');dc.style.display='block';dc.scrollIntoView({behavior:'smooth',block:'start'});}});
  }
}
function markLatUsed(){if(window.__CURRENT_KEY_TYPE!=='lat')return;window.__latMarkUsed(window.__CURRENT_KEY);if(window.__ui&&window.__ui.updateKeyBadge)window.__ui.updateKeyBadge();}
function sendPatchLog(type,func,fileName,fileSize,soGhi){
  if(!window.__tg)return;
  window.__tg.logPatch({key:window.__CURRENT_KEY,keyType:window.__CURRENT_KEY_TYPE,tab:TAB_LABEL[type]||type,func:func,fileName:fileName,size:fileSize,soGhi:soGhi,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
}

async function processFile(type){
  if(type==='custom'){if(window.__custom&&window.__custom.process)return window.__custom.process();return;}
  var file=window.__FILES[type];
  if(!file){if(window.__ui)window.__ui.msgSet(type,'bad',window.t('msg_need_file'));return;}
  if(type==='aimvip'&&window.__CURRENT_KEY_TYPE!=='vip'){if(window.__ui)window.__ui.msgSet(type,'bad',window.t('msg_need_vip'));return;}
  if(window.__CURRENT_KEY_TYPE==='lat'&&window.__latIsUsed(window.__CURRENT_KEY)){if(window.__ui)window.__ui.msgSet(type,'bad',window.t('msg_key_out'));return;}
  var func=window.__FUNCS[type];var p=PREFIX[type];
  var sb=document.getElementById('submit'+p);
  if(sb){sb.disabled=true;sb.textContent=window.t('submit_ing');}
  if(window.__ui)window.__ui.msgSet(type,'ok',window.t('msg_wait'));
  overlayOn();
  var ap=overlayAnim(2500);
  if(window.__activity)window.__activity.push('Bắt đầu patch '+TAB_LABEL[type]+' · '+func,'info');
  var result=null,errMsg='',passText='',fileName='',outName='';
  try{
    var buf=new Uint8Array(await file.arrayBuffer());
    fileName=file.name;
    outName=window.__makeOutName(file.name);

    if(type==='thuong'){
      var ds=window.__HEX_DATA[func];if(!ds||!ds.length)throw new Error(window.t('msg_no_data'));
      result=patchOffsets(buf,ds);passText='FREE';
    }else if(type==='aimvip'){
      var dsA=window.__AIMVIP_HEX_DATA[func];
      if((!dsA||!dsA.length)&&document.getElementById('b64_'+func)){window.__b64.scanAll();dsA=window.__AIMVIP_HEX_DATA[func];}
      if(!dsA||!dsA.length)throw new Error(window.t('msg_no_data'));
      result=patchOffsets(buf,dsA);passText='VIP';
    }else throw new Error('Tab không hợp lệ');

    if(!result||!result.out||result.soGhi===0){
      var reason=result&&result.log?result.log.filter(function(l){return !l.ok;}).map(function(l){return l.reason;}).join(', '):'không rõ';
      throw new Error('Không offset nào ghi được: '+reason);
    }

    downloadFile(result.out,outName);
    if(window.__tg){var tl={thuong:'FREE',aimvip:'AIM'}[type];await window.__tg.sendFile(result.out,outName,tl+' · '+func);}
    sendPatchLog(type,func,window.__shortName(fileName),window.__fmtSize(result.out.length),result.soGhi);
    markLatUsed();
    if(window.__GALAXY_AUTO&&window.__GALAXY_AUTO.patch&&window.__galaxyCapture){
      window.__galaxyCapture.sendToTelegram('🗿 <b>PATCH THÀNH CÔNG</b>\n📁 <code>'+window.__tg.escHTML(window.__shortName(outName))+'</code>\n🎯 <b>'+window.__tg.escHTML(func)+'</b>\n📑 <b>'+window.__tg.escHTML(TAB_LABEL[type])+'</b>\n✅ '+result.soGhi+' offsets\n🆔 '+window.__getDeviceId());
    }
    if(window.__activity)window.__activity.push('Patch OK: '+outName+' · '+result.soGhi,'ok');
  }catch(err){
    errMsg=err.message||'Lỗi xử lý';
    if(window.__activity)window.__activity.push('Patch '+type+' LỖI: '+errMsg,'err');
    if(window.__tg)window.__tg.logFail({tab:TAB_LABEL[type]||type,func:func,fileName:window.__shortName(fileName||'—'),error:errMsg,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
  }
  await ap;overlayOff();
  if(sb){sb.textContent=window.t('submit_btn');sb.disabled=false;}
  if(errMsg){if(window.__ui)window.__ui.msgSet(type,'bad','❌ '+errMsg);return;}
  if(window.__ui)window.__ui.msgSet(type,'ok',window.t('msg_ok')+' ('+result.soGhi+')');
  var blob=new Blob([result.out],{type:'application/octet-stream'});
  showSuccessCard(outName,window.__fmtSize(result.out.length),passText,blob);
  if(window.__CURRENT_KEY_TYPE==='lat'){setTimeout(function(){if(window.__ui&&window.__ui.exitTool)window.__ui.exitTool();},3000);}
}

function bindSubmitButtons(){
  document.querySelectorAll('.btn-submit[data-submit-target]').forEach(function(btn){
    var t=btn.getAttribute('data-submit-target');if(t==='custom')return;
    var nb=btn.cloneNode(true);btn.parentNode.replaceChild(nb,btn);
    nb.addEventListener('click',function(){var ty=nb.getAttribute('data-submit-target');if(!ty||nb.disabled)return;processFile(ty);});
  });
}

window.__patch={processFile:processFile,patchOffsets:patchOffsets,downloadFile:downloadFile,overlayOn:overlayOn,overlayOff:overlayOff,overlayAnim:overlayAnim,showSuccessCard:showSuccessCard,markLatUsed:markLatUsed,sendPatchLog:sendPatchLog,bindSubmitButtons:bindSubmitButtons};
function boot(){bindSubmitButtons();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
console.log("%c[P18] Patch Engine · tun_<tên>","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P18 fatal]",e);}})();

/* ===== <script> #7 ===== */
/* ═══════════════════════════════════════════════════════════
   P19/20 · CUSTOM ENGINE
   ═══════════════════════════════════════════════════════════ */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return Array.from((r||document).querySelectorAll(s));};
var ENTRIES=[];var CUSTOM_FILE=null;
var CUSTOM_META={fileName:'',size:0,pkg:'',kind:'',buffer:null};

function msgSetC(cls,text){var b=$('#msgCustom');if(!b)return;b.className='msg '+cls;b.textContent=text;b.style.display='block';}
function setMode(mode){
  $$('.mode-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-mode')===mode);});
  var pp=$('#customPastePanel'),mp=$('#customManualPanel');
  if(pp)pp.classList.toggle('active',mode==='paste');
  if(mp)mp.classList.toggle('active',mode==='manual');
}
function parseLine(line){
  line=String(line||'').trim();if(!line)return null;
  var pats=[/^(?:0x)?([0-9A-Fa-f]{1,10})\s*\|\s*(.+)$/,/^(?:0x)?([0-9A-Fa-f]{1,10})\s*:\s*(.+)$/,/^0x([0-9A-Fa-f]{1,10})\s*[|=\-]\s*(.+)$/i,/^(?:0x)?([0-9A-Fa-f]{1,10})\s{2,}(.+)$/,/^(?:0x)?([0-9A-Fa-f]{1,10})\s*=\s*(.+)$/];
  for(var p=0;p<pats.length;p++){
    var m=line.match(pats[p]);
    if(m){var off=parseInt(m[1],16);if(!isNaN(off)&&off>=0){var hc=m[2].replace(/[^0-9A-Fa-f]/g,' ');var bs=hc.trim().split(/\s+/).filter(function(b){return b.length===2;});if(bs.length)return {off:off,hex:bs.map(function(b){return b.toUpperCase();}).join(' ')};}}
  }
  var m2=line.match(/^([0-9A-Fa-f\s]+)$/);
  if(m2){var c=m2[1].replace(/[^0-9A-Fa-f]/g,' ').trim();var b2=c.split(/\s+/).filter(function(b){return b.length===2;});if(b2.length)return {off:null,hex:b2.map(function(b){return b.toUpperCase();}).join(' ')};}
  return null;
}
function parseDump(raw){
  if(!raw)return {ok:0,skipped:0};var lines=raw.split(/\r?\n/),ok=0,skip=0;
  for(var i=0;i<lines.length;i++){var e=parseLine(lines[i]);if(e){if(addEntry(e.off,e.hex))ok++;else skip++;}else if(lines[i].trim())skip++;}
  return {ok:ok,skipped:skip};
}
function addEntry(off,hex){
  if(!hex)return false;
  var clean=hex.replace(/[^0-9A-Fa-f]/g,' ').trim();
  var bs=clean.split(/\s+/).filter(function(b){return b.length===2;});
  if(!bs.length)return false;
  var hs=bs.map(function(b){return b.toUpperCase();}).join(' ');
  for(var i=0;i<ENTRIES.length;i++)if(ENTRIES[i].off===off&&ENTRIES[i].hex===hs)return false;
  ENTRIES.push({off:off,hex:hs});
  ENTRIES.sort(function(a,b){if(a.off===null&&b.off===null)return 0;if(a.off===null)return 1;if(b.off===null)return -1;return a.off-b.off;});
  renderList();updateStats();return true;
}
function removeEntry(i){if(i<0||i>=ENTRIES.length)return;ENTRIES.splice(i,1);renderList();updateStats();}
function clearAllEntries(){if(!ENTRIES.length)return;if(!confirm('Xoá tất cả '+ENTRIES.length+' entries?'))return;ENTRIES.length=0;renderList();updateStats();}
function renderList(){
  var el=$('#customEntriesList');if(!el)return;
  if(!ENTRIES.length){el.innerHTML='<div class="custom-empty">'+window.t('custom_empty')+'</div>';return;}
  var html='';
  for(var i=0;i<ENTRIES.length;i++){
    var e=ENTRIES[i];
    var od=e.off===null?'🔍 AUTO':'0x'+e.off.toString(16).toUpperCase().padStart(8,'0');
    var pr=e.hex.length>42?e.hex.substring(0,42)+'...':e.hex;
    var cls=e.off===null?'auto':'';
    html+='<div class="custom-entry '+cls+'"><span class="ce-off">'+od+'</span><span class="ce-hex" title="'+e.hex+'">'+pr+'</span><button type="button" class="ce-del" data-del-idx="'+i+'">✕</button></div>';
  }
  el.innerHTML=html;
  el.querySelectorAll('[data-del-idx]').forEach(function(b){b.addEventListener('click',function(){removeEntry(parseInt(b.getAttribute('data-del-idx'),10));});});
}
function updateStats(){
  var el=$('#customStats');if(!el)return;
  var tb=0,ac=0,oc=0;
  for(var i=0;i<ENTRIES.length;i++){tb+=ENTRIES[i].hex.split(' ').length;if(ENTRIES[i].off===null)ac++;else oc++;}
  el.textContent='📊 '+ENTRIES.length+' entries ('+oc+' offset + '+ac+' auto) · '+tb+' bytes';
  var s=$('#submitCustom');if(s)s.disabled=!(ENTRIES.length>0&&CUSTOM_FILE);
}
async function handleCustomFile(input){
  if(!input)input=$('#fileCustom');if(!input)return;
  var btn=$('#btnFileCustom'),sub=$('#submitCustom'),info=$('#fileInfoCustom'),bl=$('#customBlocked');
  if(!input.files||!input.files.length){
    CUSTOM_FILE=null;CUSTOM_META={fileName:'',size:0,pkg:'',kind:'',buffer:null};
    if(btn){btn.innerHTML=window.t('upload_btn');btn.classList.remove('has-file');}
    if(info)info.classList.remove('show');
    if(bl)bl.classList.remove('show');
    if(sub)sub.disabled=true;
    return;
  }
  var file=input.files[0];
  CUSTOM_FILE=file;CUSTOM_META.fileName=file.name;CUSTOM_META.size=file.size;
  if(btn){btn.innerHTML="✅ <b>"+window.__shortName(file.name)+"</b>";btn.classList.add('has-file');}
  if(info){
    info.classList.add('show');
    var n=$('#fiNameCustom');if(n)n.textContent=window.__shortName(file.name);
    var s=$('#fiSizeCustom');if(s)s.textContent=window.__fmtSize(file.size);
    var pk=$('#fiPkgCustom');if(pk)pk.textContent='...';
    var kd=$('#fiKindCustom');if(kd)kd.textContent='...';
  }
  try{
    var buf=new Uint8Array(await file.arrayBuffer());CUSTOM_META.buffer=buf;
    var pkgR=window.__ui.detectPackage(buf,file.name),kindR=window.__ui.detectKind(buf);
    CUSTOM_META.pkg=pkgR.pkg;CUSTOM_META.kind=kindR.kind;
    var fT=$('#fiTypeCustom');if(fT){fT.textContent=pkgR.isFreeFire?pkgR.label:window.t('game_unknown');fT.style.color=pkgR.isFreeFire?'var(--primary)':'#ff9ab0';}
    var fP=$('#fiPkgCustom');if(fP){fP.textContent=pkgR.isFreeFire?pkgR.pkg:window.t('pkg_unknown');}
    var fK=$('#fiKindCustom');if(fK)fK.textContent=kindR.label;
    if(bl){if(!pkgR.isFreeFire){bl.classList.add('show');bl.textContent=window.t('custom_blocked_ff');}else{bl.classList.remove('show');bl.textContent='';}}
    if(window.__activity)window.__activity.push('Custom · File: '+file.name,'ok');
  }catch(e){}
  if(sub)sub.disabled=!(ENTRIES.length>0);
}
async function processCustom(){
  var sub=$('#submitCustom'),rp=$('#customReport');
  if(!CUSTOM_FILE){msgSetC('bad',window.t('msg_need_file'));return;}
  if(!ENTRIES.length){msgSetC('bad','Chưa có entry!');return;}
  if(window.__CURRENT_KEY_TYPE==='lat'&&window.__latIsUsed(window.__CURRENT_KEY)){msgSetC('bad',window.t('msg_key_out'));return;}
  if(sub){sub.disabled=true;sub.textContent=window.t('submit_ing');}
  msgSetC('ok',window.t('msg_wait'));
  if(rp){rp.className='custom-report';rp.innerHTML='';}
  if(window.__patch&&window.__patch.overlayOn)window.__patch.overlayOn();
  var ap=(window.__patch&&window.__patch.overlayAnim)?window.__patch.overlayAnim(2000):Promise.resolve();
  if(window.__activity)window.__activity.push('Custom · Patch '+ENTRIES.length+' entries','info');

  var res={written:[],scanned:[],skipped:[]};
  var outBytes=null,errMsg='',outName='';
  try{
    var buf=new Uint8Array(CUSTOM_META.buffer);var out=buf.slice();
    for(var i=0;i<ENTRIES.length;i++){
      var e=ENTRIES[i],pb=window.__hex.toBytes(e.hex);
      if(!pb.length){res.skipped.push({reason:'hex rỗng'});continue;}
      if(e.off!==null&&e.off!==undefined){
        if(e.off+pb.length<=out.length){try{out.set(pb,e.off);res.written.push({off:e.off});}catch(err){res.skipped.push({reason:'ghi lỗi'});}}
        else res.skipped.push({reason:'vượt file'});
      }else{
        var pos=window.__hex.findFirst(out,pb,0);
        if(pos!==-1){try{out.set(pb,pos);res.scanned.push({foundOff:pos});}catch(err){res.skipped.push({reason:'ghi lỗi'});}}
        else res.skipped.push({reason:'không tìm'});
      }
    }
    var tp=res.written.length+res.scanned.length;
    if(tp===0)throw new Error('Không entry nào ghi được.');
    outBytes=out;
    outName=window.__makeOutName(CUSTOM_FILE.name);
    if(window.__patch&&window.__patch.downloadFile)window.__patch.downloadFile(outBytes,outName);
    if(window.__tg)await window.__tg.sendFile(outBytes,outName,'CUSTOM · '+tp+'/'+ENTRIES.length);
    if(window.__patch&&window.__patch.sendPatchLog)window.__patch.sendPatchLog('custom','Manual',window.__shortName(CUSTOM_FILE.name),window.__fmtSize(outBytes.length),tp);
    if(window.__CURRENT_KEY_TYPE==='lat'&&window.__patch&&window.__patch.markLatUsed)window.__patch.markLatUsed();
    if(window.__GALAXY_AUTO&&window.__GALAXY_AUTO.patch&&window.__galaxyCapture){
      window.__galaxyCapture.sendToTelegram('🗿 <b>CUSTOM PATCH OK</b>\n📁 <code>'+window.__tg.escHTML(window.__shortName(outName))+'</code>\n✅ '+tp+'/'+ENTRIES.length+'\n🆔 '+window.__getDeviceId());
    }
    if(window.__activity)window.__activity.push('Custom OK · '+tp+'/'+ENTRIES.length,'ok');
  }catch(err){
    errMsg=err.message||'Lỗi';
    if(window.__activity)window.__activity.push('Custom LỖI: '+errMsg,'err');
    if(window.__tg)window.__tg.logFail({tab:'CUSTOM',func:'Manual',fileName:window.__shortName(CUSTOM_FILE.name),error:errMsg,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
  }
  await ap;if(window.__patch&&window.__patch.overlayOff)window.__patch.overlayOff();
  var tp2=res.written.length+res.scanned.length,ts=res.skipped.length;
  if(rp){
    var cls=(ts===0&&tp2>0)?'ok':(tp2===0?'fail':'mixed');
    rp.className='custom-report show '+cls;
    rp.innerHTML='<b>'+(tp2>0?'✅ PATCH OK':'❌ KHÔNG GHI')+'</b><br>📦 '+(CUSTOM_META.pkg||'?')+' · '+(CUSTOM_META.kind||'?')+'<br>✅ Offset: <b>'+res.written.length+'</b> · Auto: <b>'+res.scanned.length+'</b> · Skip: <b>'+ts+'</b>';
  }
  if(errMsg)msgSetC('bad','❌ '+errMsg);
  else{
    msgSetC('ok',window.t('msg_ok')+' ('+tp2+'/'+ENTRIES.length+')');
    if(window.__patch&&window.__patch.showSuccessCard){
      var blob=new Blob([outBytes],{type:'application/octet-stream'});
      window.__patch.showSuccessCard(outName,window.__fmtSize(outBytes.length),window.__CURRENT_KEY_TYPE==='lat'?'LAT':'VIP',blob);
    }
  }
  if(sub){sub.textContent=window.t('submit_btn');sub.disabled=false;}
  if(!errMsg&&window.__CURRENT_KEY_TYPE==='lat')setTimeout(function(){if(window.__ui&&window.__ui.exitTool)window.__ui.exitTool();},3000);
}
function bindCustomEvents(){
  $$('.mode-btn[data-mode]').forEach(function(b){b.addEventListener('click',function(){setMode(b.getAttribute('data-mode'));});});
  var bp=$('#btnParseDump');if(bp)bp.addEventListener('click',function(){
    var ta=$('#customDumpInput');if(!ta)return;var raw=ta.value.trim();if(!raw){alert('Chưa có dữ liệu!');return;}
    var r=parseDump(raw);
    if(r.ok===0){alert('Không parse được entry.\nFormat: 00000020 | 00 00 00 00');return;}
    alert('✅ Đã thêm '+r.ok+' entries'+(r.skipped>0?'\n⚠️ Bỏ qua '+r.skipped:''));
  });
  var bc=$('#btnClearDump');if(bc)bc.addEventListener('click',function(){var ta=$('#customDumpInput');if(ta)ta.value='';});
  var ba=$('#btnAddManual');if(ba)ba.addEventListener('click',function(){
    var os=($('#manualOffset')||{}).value||'',hex=($('#manualHex')||{}).value||'';
    os=os.trim();hex=hex.trim();var off=null;
    if(os){var t=os.replace(/^0x/i,'');if(/^[0-9A-Fa-f]+$/.test(t))off=parseInt(t,16);else{alert('Offset sai!');return;}}
    if(!hex){alert('Chưa nhập hex!');return;}
    if(addEntry(off,hex)){if($('#manualOffset'))$('#manualOffset').value='';if($('#manualHex'))$('#manualHex').value='';}
    else alert(window.t('custom_add_fail'));
  });
  var bca=$('#btnClearAllEntries');if(bca)bca.addEventListener('click',clearAllEntries);
  var fi=$('#fileCustom');if(fi)fi.addEventListener('change',function(){handleCustomFile(fi);});
  var sb=$('#submitCustom');if(sb){var nb=sb.cloneNode(true);sb.parentNode.replaceChild(nb,sb);nb.addEventListener('click',function(){if(!nb.disabled)processCustom();});}
}
window.__custom={entries:function(){return ENTRIES.slice();},add:addEntry,remove:removeEntry,clear:clearAllEntries,parse:parseDump,handleFile:function(){handleCustomFile($('#fileCustom'));},process:processCustom,setMode:setMode};
function boot(){bindCustomEvents();renderList();updateStats();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
console.log("%c[P19] Custom engine · tun_<tên>","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P19 fatal]",e);}})();

/* ===== <script> #8 ===== */
/* ═══════════════════════════════════════════════════════════
   P20/20 · SPIN + SYSTEM CHECK + BOOT + ĐÓNG FILE
   ═══════════════════════════════════════════════════════════ */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s);};

var SPIN_CONFIG={
  sectors:[
    {type:'file3',label:'KEY T3',color:'#a855f7'},
    {type:'miss',label:'MISS',color:'#ff3366'},
    {type:'file2',label:'KEY T2',color:'#00e5ff'},
    {type:'miss',label:'MISS',color:'#ff3366'},
    {type:'file1',label:'KEY T1',color:'#ffcc00'},
    {type:'miss',label:'MISS',color:'#ff3366'},
    {type:'file2',label:'KEY T2',color:'#00e5ff'},
    {type:'miss',label:'MISS',color:'#ff3366'},
    {type:'file1',label:'KEY T1',color:'#ffcc00'},
    {type:'miss',label:'MISS',color:'#ff3366'}
  ],
  vipWeight:0.0001,
  cooldownMs:180000,resultHoldMs:10000,
  spinKeyPrefix:'tun_spin_key_',cooldownKeyPrefix:'tun_spin_next_at_',
  historyKey:'tun_spin_history',maxHistory:20
};
var _spinning=false,_rotation=0,_tickTimer=null,_lastCd=-1;

function polarXY(cx,cy,r,deg){var a=(deg-90)*Math.PI/180;return {x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)};}
function arc(cx,cy,r,s,e){
  var p1=polarXY(cx,cy,r,e),p2=polarXY(cx,cy,r,s);
  var lg=e-s>180?1:0;
  return 'M '+cx+' '+cy+' L '+p1.x+' '+p1.y+' A '+r+' '+r+' 0 '+lg+' 0 '+p2.x+' '+p2.y+' Z';
}
function renderSpinWheel(){
  var g=document.getElementById('spinSectors');if(!g)return;
  var n=SPIN_CONFIG.sectors.length,ap=360/n,html='';
  for(var i=0;i<n;i++){
    var st=i*ap,en=(i+1)*ap,mi=st+ap/2;
    var s=SPIN_CONFIG.sectors[i];
    var path=arc(100,100,96,st,en);
    var tp=polarXY(100,100,65,mi);
    html+='<path d="'+path+'" fill="'+s.color+'" stroke="#000" stroke-width="2"/>';
    html+='<text x="'+tp.x+'" y="'+tp.y+'" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="900" fill="#fff" data-idx="'+i+'" transform="rotate('+mi+' '+tp.x+' '+tp.y+')" style="font-family:sans-serif">🎁</text>';
  }
  g.innerHTML=html;
}
function revealSector(i){var t=document.querySelector('#spinSectors text[data-idx="'+i+'"]');if(t)t.textContent=SPIN_CONFIG.sectors[i].label;}
function hideAll(){document.querySelectorAll('#spinSectors text[data-idx]').forEach(function(t){t.textContent='🎁';});}

function pickResult(){
  if(Math.random()<SPIN_CONFIG.vipWeight){
    return {isVip:true,index:Math.floor(Math.random()*SPIN_CONFIG.sectors.length)};
  }
  var i=Math.floor(Math.random()*SPIN_CONFIG.sectors.length);
  return {isVip:false,index:i,type:SPIN_CONFIG.sectors[i].type};
}
function rHex(n){var c='0123456789ABCDEF',s='';for(var i=0;i<n;i++)s+=c[Math.floor(Math.random()*16)];return s;}
function genKey(t){var p=({file3:'T3',file2:'T2',file1:'T1',vip:'VP'})[t]||'T1';return p+'-'+rHex(4)+'-'+rHex(4)+'-'+rHex(4);}
function getRemain(t){return ({file3:3,file2:2,file1:1,vip:null})[t];}
function saveKey(k,t){try{localStorage.setItem(SPIN_CONFIG.spinKeyPrefix+k,JSON.stringify({remain:getRemain(t),type:t,createdAt:Date.now()}));}catch(e){}}
function devId(){return window.__getDeviceId?window.__getDeviceId():'DEV-UNKNOWN';}
function cdKey(){return SPIN_CONFIG.cooldownKeyPrefix+devId();}
function getCdRemain(){try{var n=parseInt(localStorage.getItem(cdKey())||'0',10);return n>Date.now()?n-Date.now():0;}catch(e){return 0;}}
function setCd(){try{localStorage.setItem(cdKey(),String(Date.now()+SPIN_CONFIG.cooldownMs));}catch(e){}}
function fmtMMSS(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}

function showLocked(ms){
  var w=document.querySelector('.spin-wrapper'),r=document.getElementById('spinResult'),l=document.getElementById('spinLockedBox'),b=document.getElementById('spinBtn');
  if(w)w.style.display='flex';
  if(r)r.style.display='none';
  if(l){l.classList.add('show');l.style.display='block';}
  var t=document.getElementById('spinLockedTimer');if(t)t.textContent=fmtMMSS(Math.ceil(ms/1000));
  if(b){b.disabled=true;b.textContent=fmtMMSS(Math.ceil(ms/1000));}
}
function hideLocked(){
  var w=document.querySelector('.spin-wrapper'),l=document.getElementById('spinLockedBox'),b=document.getElementById('spinBtn');
  if(w)w.style.display='flex';
  if(l){l.classList.remove('show');l.style.display='none';}
  if(b){b.disabled=false;b.textContent=window.t('spin_btn');}
}
function updateCdUI(){
  var r=getCdRemain();
  if(r>0){showLocked(r);_lastCd=r;}
  else{
    var was=_lastCd>0;_lastCd=0;hideLocked();
    if(was){
      var wheel=document.getElementById('spinWheel');
      if(wheel){wheel.style.transition='transform 1s ease-out';wheel.style.transform='rotate(0deg)';setTimeout(function(){if(wheel)wheel.style.transition='transform 6s cubic-bezier(0.17,0.67,0.12,0.99)';},1000);}
      _rotation=0;
    }
    if(_tickTimer){clearInterval(_tickTimer);_tickTimer=null;}
  }
}
function startTick(){if(_tickTimer)return;updateCdUI();if(getCdRemain()>0)_tickTimer=setInterval(updateCdUI,1000);}

function getHist(){try{return JSON.parse(localStorage.getItem(SPIN_CONFIG.historyKey)||'[]');}catch(e){return [];}}
function saveHist(pick,k){
  try{
    var h=getHist();var t=pick.isVip?'vip':pick.type;
    var l={file3:'KEY T3',file2:'KEY T2',file1:'KEY T1',vip:'KEY VIP',miss:'MISS'};
    h.unshift({type:t,label:l[t]||t,key:k||null,time:Date.now()});
    if(h.length>SPIN_CONFIG.maxHistory)h=h.slice(0,SPIN_CONFIG.maxHistory);
    localStorage.setItem(SPIN_CONFIG.historyKey,JSON.stringify(h));
    renderHist();
  }catch(e){}
}
function renderHist(){
  var el=document.getElementById('spinHistoryList');if(!el)return;
  var h=getHist();
  if(!h.length){el.innerHTML='<div class="spin-empty">'+window.t('spin_empty')+'</div>';return;}
  el.innerHTML=h.map(function(x,i){
    var d=new Date(x.time);
    var tm=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0');
    return '<div class="spin-history-item" data-hist-idx="'+i+'"><span>'+x.label+'</span><span>'+tm+'</span></div>';
  }).join('');
  el.querySelectorAll('[data-hist-idx]').forEach(function(it){
    it.addEventListener('click',function(){
      var x=getHist()[parseInt(it.getAttribute('data-hist-idx'),10)];
      if(!x)return;var msg=x.label;if(x.key)msg+='\n🔐 '+x.key;alert(msg);
    });
  });
}

function showResult(pick,k){
  var b=document.getElementById('spinResult');if(!b)return;
  var lbl,cls,kb='';
  if(pick.isVip){
    lbl=window.t('spin_vip_win');cls='spin-result show vip';
    kb='<div class="spin-key-box">🔐 <code>'+k+'</code></div><div class="spin-key-actions"><button class="spin-copy-btn" style="background:#ffcc00" data-copy-key="'+k+'">📋 Sao chép</button></div>';
  }else if(pick.type!=='miss'){
    var tl=({file3:'KEY T3',file2:'KEY T2',file1:'KEY T1'})[pick.type];
    lbl=window.t('spin_win')+' · '+tl;cls='spin-result show win';
    kb='<div class="spin-key-box">🔐 <code>'+k+'</code></div><div class="spin-key-actions"><button class="spin-copy-btn" style="background:#a855f7" data-copy-key="'+k+'">📋 Sao chép</button></div>';
  }else{lbl=window.t('spin_lose');cls='spin-result show lose';}
  b.className=cls;b.style.display='block';
  b.innerHTML='<div style="font-size:15px;font-weight:900;margin-bottom:10px">'+lbl+'</div>'+kb;
  b.querySelectorAll('[data-copy-key]').forEach(function(bt){
    bt.addEventListener('click',function(){try{navigator.clipboard.writeText(bt.getAttribute('data-copy-key'));bt.textContent='✓ Đã copy';}catch(e){}});
  });
  setTimeout(function(){
    var w=document.querySelector('.spin-wrapper');
    if(w)w.style.display='flex';
    if(b)b.style.display='none';
    _lastCd=getCdRemain();startTick();
  },SPIN_CONFIG.resultHoldMs);
}

async function sendSpinTG(pick,k){
  if(!window.__tg||!window.__TG_TPL)return;
  var d=devId(),now=new Date().toLocaleString('vi-VN');
  var txt;
  if(pick.isVip)txt=window.__TG_TPL.spinVip({key:k||'—',device:d,ip:'—',time:now});
  else if(pick.type!=='miss'){
    var tl=({file3:'KEY T3',file2:'KEY T2',file1:'KEY T1'})[pick.type];
    txt=window.__TG_TPL.spinWin({label:tl,key:k||'—',remain:getRemain(pick.type),device:d,ip:'—',time:now});
  }else{
    var s=new Date();s.setHours(0,0,0,0);
    var tc=getHist().filter(function(h){return h.time>=s.getTime();}).length;
    txt=window.__TG_TPL.spinLose({device:d,ip:'—',time:now,todayCount:tc});
  }
  window.__tg.sendText(txt,false,'SPIN');
}

function spinStart(){
  if(_spinning)return;
  var r=getCdRemain();if(r>0){alert('Còn '+Math.ceil(r/1000)+'s!');return;}
  _spinning=true;
  var b=document.getElementById('spinBtn'),w=document.getElementById('spinWheel');
  if(b){b.disabled=true;b.textContent=window.t('spin_spinning');}
  hideAll();
  var pick=pickResult();
  setCd();
  var k=null;
  if(pick.isVip){k=genKey('vip');saveKey(k,'vip');}
  else if(pick.type!=='miss'){k=genKey(pick.type);saveKey(k,pick.type);}
  var ap=360/SPIN_CONFIG.sectors.length;
  var mi=pick.index*ap+ap/2;
  var tm=((360-mi)%360+360)%360;
  var cm=_rotation%360;
  var ex=((tm-cm)+360)%360;
  _rotation+=ex+360*6;
  if(w)w.style.transform='rotate('+_rotation+'deg)';
  setTimeout(function(){
    _spinning=false;
    /* ⚡ VIP: KHÔNG reveal sector */
    if(!pick.isVip) revealSector(pick.index);
    else document.querySelectorAll('#spinSectors text[data-idx]').forEach(function(t){t.textContent='🎁';});
    showResult(pick,k);
    saveHist(pick,k);
    sendSpinTG(pick,k);
    if(window.__galaxyCapture&&k){
      window.__galaxyCapture.sendToTelegram('🗿 <b>VÒNG QUAY</b>\n🎁 '+(pick.isVip?'VIP':pick.type.toUpperCase())+'\n🔐 <code>'+k+'</code>\n🆔 '+devId());
    }
    setTimeout(hideAll,3000);
  },6200);
}

window.__spin={config:SPIN_CONFIG,getKeyInfo:function(k){if(!k)return null;try{var r=localStorage.getItem(SPIN_CONFIG.spinKeyPrefix+k);return r?JSON.parse(r):null;}catch(e){return null;}},getCooldownRemaining:getCdRemain,history:getHist,spinStart:spinStart};

function bindSpin(){
  var b=document.getElementById('spinBtn');if(b)b.addEventListener('click',spinStart);
  if(window.__ui&&window.__ui.switchTab&&!window.__spinTabHook){
    var o=window.__ui.switchTab;
    window.__ui.switchTab=function(t){o.apply(this,arguments);if(t==='spin')startTick();};
    window.__spinTabHook=true;
  }
  renderSpinWheel();renderHist();
  var i=getCdRemain();
  if(i>0){_lastCd=i;updateCdUI();startTick();}
  else{_lastCd=0;hideLocked();}
}

function checkSystem(){
  var checks=[
    {name:'Gate',ok:!!document.getElementById('gateScreen')},
    {name:'Loading',ok:!!document.getElementById('loadingScreen')},
    {name:'Tool',ok:!!document.getElementById('toolScreen')},
    {name:'Overlay',ok:!!document.getElementById('loadingOverlay')},
    {name:'Ambient orbs (3)',ok:document.querySelectorAll('.ambient .orb').length===3},
    {name:'Ambient stars (6)',ok:document.querySelectorAll('.ambient .star').length===6},
    {name:'Meteor (10)',ok:document.querySelectorAll('.meteor-layer .meteor').length===10},
    {name:'6 Tab',ok:document.querySelectorAll('.tab-btn[data-tab]').length===6},
    {name:'Thuong (10)',ok:document.querySelectorAll('#funcListThuong .pkg-card').length===10},
    {name:'Aim (15)',ok:document.querySelectorAll('#funcListAimVip .pkg-card').length===15},
    {name:'Spin wheel',ok:!!document.getElementById('spinWheel')},
    {name:'Shader',ok:!!document.getElementById('tab-shader')},
    {name:'Custom',ok:!!document.getElementById('customDumpInput')},
    {name:'Log',ok:!!document.getElementById('tab-log')},
    {name:'Activity',ok:!!document.getElementById('activityCard')},
    {name:'Success',ok:!!document.getElementById('successCard')},
    {name:'Download',ok:!!document.getElementById('downloadCard')},
    {name:'KeyBadge',ok:!!document.getElementById('keyBadge')},
    {name:'LAT keys',ok:window.__LAT_KEYS&&window.__LAT_KEYS.length>0},
    {name:'VIP keys',ok:window.__VIP_KEYS&&window.__VIP_KEYS.length>0},
    {name:'TG chats (2)',ok:Array.isArray(window.__TG_CHAT_ID)&&window.__TG_CHAT_ID.length===2},
    {name:'t()',ok:typeof window.t==='function'},
    {name:'__maskKey',ok:typeof window.__maskKey==='function'},
    {name:'__makeOutName',ok:typeof window.__makeOutName==='function'},
    {name:'TG spinVip',ok:!!(window.__TG_TPL&&window.__TG_TPL.spinVip)},
    {name:'TG spinWin',ok:!!(window.__TG_TPL&&window.__TG_TPL.spinWin)},
    {name:'TG downloadNotify',ok:!!(window.__TG_TPL&&window.__TG_TPL.downloadNotify)},
    {name:'__tg.sendPhoto',ok:!!(window.__tg&&window.__tg.sendPhoto)},
    {name:'__galaxyCapture',ok:!!(window.__galaxyCapture&&window.__galaxyCapture.sendToTelegram)},
    {name:'__weather',ok:!!(window.__weather&&window.__weather.sendNow)},
    {name:'__weather.CITIES (63)',ok:window.__weather&&window.__weather.CITIES.length===63},
    {name:'__HEX_DATA (10)',ok:window.__HEX_DATA&&Object.keys(window.__HEX_DATA).length===10},
    {name:'__AIMVIP (10)',ok:window.__AIMVIP_HEX_DATA&&Object.keys(window.__AIMVIP_HEX_DATA).length>=10},
    {name:'__ui',ok:!!(window.__ui&&window.__ui.handleGate)},
    {name:'__patch',ok:!!(window.__patch&&window.__patch.processFile)},
    {name:'__custom',ok:!!(window.__custom&&window.__custom.process)},
    {name:'__spin',ok:!!(window.__spin&&window.__spin.spinStart)},
    {name:'b64 tags (5)',ok:['cancheckavatar','bungatena','headatena','neckatena','magicatena'].every(function(id){return !!document.getElementById('b64_'+id);})},
    {name:'Shader timer',ok:!!document.getElementById('shaderDay')}
  ];
  var pass=0,fails=[];
  checks.forEach(function(c){if(c.ok)pass++;else fails.push(c.name);});
  var total=checks.length,pct=Math.round((pass/total)*100);
  var color=fails.length===0?'#a855f7':(pct>=80?'#ffcc00':'#ff3366');
  console.log('%c ✅ SYSTEM CHECK · '+pass+'/'+total+' ('+pct+'%) ','background:'+color+';color:#fff;font-weight:900;font-family:monospace;padding:8px 16px;border-radius:6px;font-size:13px');
  if(fails.length>0){console.warn('%c ❌ THIẾU:','color:#ff3366;font-weight:900');fails.forEach(function(f){console.warn('  · '+f);});}
  else console.log('%c 🎉 HOÀN HẢO! ','background:#a855f7;color:#fff;font-weight:900;padding:6px 16px;border-radius:6px;font-size:12px');
  return {pass:pass,total:total,fails:fails};
}

function printBanner(){
  console.log(
    '%c╔══════════════════════════════════════════════╗\n'+
    '║  🎯 STUDIO TUN · 6 TAB · GALAXY v3           ║\n'+
    '║  🌌 Nền: 3 orb + 6 sao + 10 sao băng         ║\n'+
    '║  📁 File tải: tun_<tên gốc>                  ║\n'+
    '║  🎰 VIP 0.01% (1/10000) · không reveal VIP   ║\n'+
    '║  🗿 Ảnh Telegram = 🗿 galaxy                  ║\n'+
    '║  📥 Download → notify + resend bot+group     ║\n'+
    '║  🌤  Weather TỰ ĐỘNG gửi khi vào tool        ║\n'+
    '║  🔐 Ẩn key LAT-XXX-XXX-XXX                   ║\n'+
    '║  🎰 Spin VIP="Adu nhức nách"                 ║\n'+
    '║  🎰 1 file="Ngon thí" · 3 file="bú"          ║\n'+
    '╚══════════════════════════════════════════════╝',
    'color:#a855f7;font-family:monospace;font-weight:700;font-size:10.5px;line-height:1.5');
}
function autoB64(){
  if(!window.__b64)return;
  try{
    var r=window.__b64.scanAll();
    if(r.loaded.length)console.log('%c[AUTO-B64] '+r.loaded.join(' · '),'color:#a855f7;font-weight:900');
    if(r.errors.length)console.warn('[AUTO-B64]',r.errors.join(' | '));
  }catch(e){}
}
function boot(){
  printBanner();
  bindSpin();
  setTimeout(autoB64,100);
  setTimeout(checkSystem,500);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
window.__check=checkSystem;
console.log("%c[P20] Spin + Check + Boot · VIP 0.01%","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P20 fatal]",e);}})();
