// Notice.js by CKY
// Just for Modern Browsers
// Copyright 2023 CKY.

let domain = location.hostname;

let scripts = document.getElementsByTagName('script');

let script = scripts[scripts.length - 1];

let server = script.getAttribute('server');

(async () => {
    let res = await fetch(server + '/' + domain);
    let data = await res.json();
    if (data.success 
        && Date.now() < new Date(data.data.expired).getTime() 
        && (!localStorage.getItem('noticejs_client_' + data.data.uid) && !sessionStorage.getItem('noticejs_client_' + data.data.uid))) {
        let notice = document.createElement('div');
        notice.style.transition = 'all .4s ease';
        notice.style.opacity = 0;
        notice.style.position = 'fixed';
        notice.style.top = '0';
        notice.style.left = '0';
        notice.style.width = '100%';
        notice.style.cursor = 'pointer';
        notice.style.zIndex = 9999;
        notice.style.padding = '20px';
        if (data.data.msgType == 'success') {
            notice.style.backgroundColor = '#81C784';
        } else if (data.data.msgType == 'info') {
            notice.style.backgroundColor = '#90A4AE';
        } else if (data.data.msgType == 'warning') {
            notice.style.backgroundColor = '#FFD54F';
        } else if (data.data.msgType == 'danger') {
            notice.style.backgroundColor = '#FF8A65';
        }
        notice.style['user-select'] = 'none';
        notice.innerHTML = `<div style="font-weight:700;max-width:90%;word-break:break-all;">${data.data.title}</div><div style="max-width:90%;word-break:break-all;">${data.data.content}</div>`;
        setTimeout(() => {
            notice.style.opacity = 1;
        }, 500);
        if (data.data.close) {
            notice.innerHTML += `<div id=tap_to_close_noticejs style="position:absolute;right:60px;top:20px;cursor:pointer;font-weight:700">X</div>`
        }
        document.body.appendChild(notice);
        setTimeout(() => {
            notice.style.opacity = 0;
            setTimeout(() => {
                notice.remove();
                let _id = 'noticejs_client_' + data.data.uid;
                if (data.data.alertType == 'session') {
                    sessionStorage.setItem(_id, true);
                } else if (data.data.alertType == 'local') {
                    localStorage.setItem(_id, true);
                }

            }, 500);
        }, 500 + data.data.wtime);

        document.getElementById('tap_to_close_noticejs').onclick = () => {
            notice.style.opacity = 0;
            setTimeout(() => {
                notice.remove();
                let _id = 'noticejs_client_' + data.data.uid;

                if (data.data.alertType == 'session') {
                    sessionStorage.setItem(_id, true);
                } else if (data.data.alertType == 'local') {
                    localStorage.setItem(_id, true);
                }
            }, 500);
        }
    } else {
        console.warn('[NoticeJS] ' + (data.msg || 'Exit.'));
    }
})();

