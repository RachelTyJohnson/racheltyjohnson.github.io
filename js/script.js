/* Javascript File */
let filtercards = document.querySelector('.filtercards');
$('.filtercards').on('click', (e)=>{
  if (e.target.tagName==="LI"){
    let allFilters = document.querySelectorAll('.filtercards li');
    for (let i=0; i<allFilters.length; i++){
      allFilters[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
    let textvalue = e.target.innerHTML.toLowerCase();
    if (textvalue === 'html/css'){ textvalue = 'htmlcss';}
    if (textvalue === 'all'){ textvalue = '';}
    $(".work-card").filter(function() {
      if ( $(this).data('tags').toLowerCase().indexOf(textvalue) > -1 ){
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
});

//cycle through all portfolio card
let workpage = document.querySelector('.work-page');
for (let i=0; i<portfolioItems.length; i++){
  let workCardHTML = `
  <div class="work-card" data-tags="${portfolioItems[i].projectTags}" >
    <div class="work-card-overflow">
      <a href="works/${portfolioItems[i].projectSlug}.html">
        <img src="${portfolioItems[i].projectThumb}" />
        <span>${portfolioItems[i].projectName}</span>
      </a>
    </div>
  </div>
  `;
  workpage.insertAdjacentHTML('beforeend',workCardHTML);
};
/*
<div class="work-card" data-tags="tagshere" >
  <div class="work-card-overflow">
    <a href="works/johnsonmusicschool.html">
      <img src="img/mark.jpg" />
      <span>Johnson Music School</span>
    </a>
  </div>
*/
