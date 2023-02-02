import { load } from 'js-yaml';

export default defineEventHandler(async (event) => {
    let data = await useStorage().getItem(`assets/notice/data.yaml`);
    data = load(data);
    let reqDomain = event.context.params.domain;
    console.log(reqDomain);
    let noticeData = null;
    for (let i of data.notice) {
        let o = i.domain.split(',');
        if (o.includes(reqDomain) || i.domain == '*') {
            noticeData = i;
            break;
        }
    }
    if (!noticeData) {
        return {
            success: false,
            msg: 'Could not find notice data for this domain',
        };
    }
    return {
        success: true,
        data: noticeData,
    }
});