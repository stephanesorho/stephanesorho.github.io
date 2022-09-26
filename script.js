function openWebDevLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5610#_ga=2.175435557.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function openAlgoLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5800#_ga=2.80332816.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function openMobileAppLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5520#_ga=2.111807491.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function openOODLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5004#_ga=2.180028195.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function openDataStructLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5008#_ga=2.79940624.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function openIntroToCSLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5001#_ga=2.175819813.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function openDiscreteStructLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5002#_ga=2.113361024.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function open5004RecitationLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_disp_course_detail?cat_term_in=202210&subj_code_in=CS&crse_numb_in=5005#_ga=2.180029219.668739412.1664124532-1875705835.1602881988';
    window.open(url);
}

function open5001RecitationLink() {
    const url = 'https://wl11gp.neu.edu/udcprod8/bwckctlg.p_display_courses?term_in=202210&one_subj=CS&sel_subj=&sel_crse_strt=5003&sel_crse_end=5003&sel_levl=&sel_schd=&sel_coll=&sel_divs=&sel_dept=&sel_attr=';
    window.open(url);
}

function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}%`;
}