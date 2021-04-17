let back_p=document.querySelector(".back_project");
let bamboo=document.querySelector("#bamboo");
let black_re=document.querySelector("#black_r");
let no_block=document.querySelector("#no_block");
let bamboo_block=document.querySelector("#bambo_block");
let black_block=document.querySelector("#black_block");
let special_block=document.querySelector("#special_block");
let book_img=document.querySelector("#book_img");
let book_txt=document.querySelector("#book_txt");
let bookmark_it=document.querySelector("#grey_circle");
let bookmark_it2=document.querySelector("#grey_path");
let bookmark_txt=document.querySelector(".book");
let thank=document.querySelector("#thanks_s");
let hamburger=document.querySelector(".hamburger");
let m_menu=document.querySelector(".mobile_menu");
let close_ham=document.querySelector(".close_icon");
let ccontrol=document.querySelector(".control");
let cyan_border="1px solid var(--cyan)";
let grey_border="1px solid var(--bg_color)";
function bookmark(){
    bookmark_it.style.fill="#147b74";
    bookmark_it2.style.fill="#ffffff";
    bookmark_txt.innerHTML="Bookmarked";
    bookmark_txt.style.color="#147b74";
}
function open_menu(){
    m_menu.style.display="flex";
    hamburger.classList.remove("active1");
    close_ham.classList.toggle("active1");
}
function close_menu(){
    m_menu.style.display="none";
    hamburger.classList.toggle("active1");
    close_ham.classList.remove("active1");
}
function thanks(){
    thank.style.display="flex";
}
function got_it(){
    thank.style.display="none";

}

function backing(){
    back_p.style.display="block";
}
function close_backing(){
    back_p.style.display="none";
}


function no_reward(){
    no_block.style.border=cyan_border;
    black_block.style.border=grey_border;
    special_block.style.border=grey_border;
    bamboo_block.style.border=grey_border;

}
function bamboo_reward(){
    bamboo.style.display="flex";
    black_re.style.display="none";
    bamboo_block.style.border=cyan_border;
    black_block.style.border=grey_border;
    special_block.style.border=grey_border;
    no_block.style.border=grey_border;


}
function black_reward(){

    black_re.style.display="flex";
    bamboo.style.display="none";
    black_block.style.border=cyan_border;
    bamboo_block.style.border=grey_border;
    special_block.style.border=grey_border;
    no_block.style.border=grey_border;


}
function special_reward(){
    special_block.style.border=cyan_border;
    bamboo_block.style.border=grey_border;
    black_block.style.border=grey_border;
    no_block.style.border=grey_border;

}


