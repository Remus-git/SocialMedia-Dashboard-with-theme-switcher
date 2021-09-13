let toggleBtn = document.querySelector("#mytoggle");
let mainContainer = document.querySelector(".mainContainer");
let header = document.querySelector(".header");
let firstHeadline = document.querySelector(".firstHeadline");
let cardContainer = document.querySelectorAll(".cardContainer");
let fbTitleSpan = document.querySelector(".fbTitle")
let igTitleSpan = document.querySelector(".igTitle")
let ttTitleSpan = document.querySelector(".twitterTitle")
let ytTitleSpan = document.querySelector(".youtubeTitle")
let fbDisHeader = document.querySelector(".fbDisHeader")
let igDisHeader = document.querySelector(".igDisHeader")
let ttDisHeader = document.querySelector(".ttDisHeader")
let ytDisHeader = document.querySelector(".ytDisHeader")
let secondHeadline = document.querySelector(".secondHeadline")
let block = document.querySelectorAll(".block")
let secondHeaderSpan = document.querySelectorAll(".secondDisHeader span")
let secondDisProgress = document.querySelectorAll(".secondDisProgress span")

toggleBtn.addEventListener("click",function(){
    header.classList.toggle("headerActive")
    mainContainer.classList.toggle("mainContainerActive")
    firstHeadline.classList.toggle("firstHeadlineActive")
    for( i = 0; i<cardContainer.length;i++){
        cardContainer[i].classList.toggle("cardContainerActive")
    }
    fbTitleSpan.children[1].classList.toggle("fbTitleActive")
    ttTitleSpan.children[1].classList.toggle("fbTitleActive")
    igTitleSpan.children[1].classList.toggle("fbTitleActive")
    ytTitleSpan.children[1].classList.toggle("fbTitleActive")
    fbDisHeader.classList.toggle("DisHeaderActive")
    ttDisHeader.classList.toggle("DisHeaderActive")
    igDisHeader.classList.toggle("DisHeaderActive")
    ytDisHeader.classList.toggle("DisHeaderActive")
    secondHeadline.classList.toggle("secondHeadlineActive")
    for(i=0; i< block.length; i++){
        block[i].classList.toggle("blockActive")
    }
    for(i=0;i<secondHeaderSpan.length;i++){
        secondHeaderSpan[i].classList.toggle("secondHeaderSpanActive")
    }
    for(i=0;i<secondDisProgress.length;i++){
        secondDisProgress[i].classList.toggle("secondDisProgressActive")
    }
})