var gallery = ['https://avatars.mds.yandex.net/get-pdb/245485/7e207740-b9fb-4241-94bb-30b108e36130/s1200 ',
    'https://avatars.mds.yandex.net/get-pdb/1539674/523600ba-3216-4475-aeef-03f30802f036/s1200?webp=false',
    'https://avatars.mds.yandex.net/get-pdb/918543/727f58ae-4e71-4446-a1b1-19adce0eb6b7/s1200?webp=false',
    'https://a.d-cd.net/2YAAAgKeqOA-1920.jpg']
    //'https://4.bp.blogspot.com/-PRPBBXysGyA/UcXMmaRRzGI/AAAAAAAAFi8/dC_wR-DxgWY/s1600/b0168_subaru_impreza_1_gen_wrx_sti_22.jpg']

var img = document.getElementById('img');
var rb = document.getElementById('right-button');
var lb = document.getElementById('left-button');
var i = 0;

function right() {
    if (i === (gallery.length - 1)) {
        i = 0;
    }
    else {
        i++;
    }
    img.src = gallery[i]
}

function left() {
    if (i === 0 ) {
        i = (gallery.length - 1 );
    }
    else {
        i--;
    }
    img.src = gallery[i]
}
rb.addEventListener('click', right);
lb.addEventListener('click', left);


