let portfolioItems = [
  {
    projectName: "Graded Pokemon",
    projectSlug: 'gradedpokemon',
    projectTags: 'htmlcss,javascript,php,mysql,wordpress,woocommerce',
    projectThumb: 'img/thumb-gradedpokemon.jpg',
    projectImage: 'img/image-gradedpokemon.jpg',
    projectURL: 'http://gradedpokemon.rachelkhoong.com',
    projectDescription: 'Description for Graded Pokemon'
  },
  {
    projectName: "Canberra Games Society",
    projectSlug: 'canberragamessociety',
    projectTags: 'htmlcss,javascript,php,mysql,wordpress',
    projectThumb: 'img/thumb-cgs.jpg',
    projectImage: 'img/image-cgs.jpg',
    projectURL: 'http://cgs.asn.au',
    projectDescription: 'Description for Canberra Games Society'
  },
  {
    projectName: "Terpsichore Dance Company",
    projectSlug: 'terpsichoredancecompany',
    projectTags: 'htmlcss,javascript,php,mysql,wordpress',
    projectThumb: 'img/thumb-tdc.jpg',
    projectImage: 'img/image-tdc.jpg',
    projectURL: 'http://www.dancewithtdc.com.au',
    projectDescription: 'Description for Terpsichore Dance Company'
  },
  {
    projectName: "Ammybunny",
    projectSlug: 'ammybunny',
    projectTags: 'htmlcss,javascript',
    projectThumb: 'img/thumb-ammybunny.jpg',
    projectImage: 'img/image-ammybunny.jpg',
    projectURL: 'http://ammybunny.com',
    projectDescription: 'Description for Ammy Bunny'
  },
  {
    projectName: "Johnson Music School",
    projectSlug: 'johnsonmusicschool',
    projectTags: 'htmlcss',
    projectThumb: 'img/thumb-jms.jpg',
    projectImage: 'img/image-jms.jpg',
    projectURL: 'http://johnsonmusic.com.au',
    projectDescription: `Description for Johnson Music School`
  },
  {
    projectName: "Employee Directory",
    projectSlug: 'employeedirectory',
    projectTags: 'htmlcss,javascript',
    projectThumb: 'img/thumb-employee.jpg',
    projectImage: 'img/image-employee.jpg',
    projectURL: 'https://github.com/RachelTyJohnson/treehouse-fewd-project8',
    projectDescription: 'Description for Employee Directory'
  },
  {
    projectName: "Web Dashboard",
    projectSlug: 'webdashboard',
    projectTags: 'htmlcss,javascript',
    projectThumb: 'img/thumb-dashboard.jpg',
    projectImage: 'img/image-dashboard.jpg',
    projectURL: 'https://github.com/RachelTyJohnson/treehouse-fewd-project7',
    projectDescription: 'Description for Web Dashboard'
  },
  {
    projectName: "Wheel of Success",
    projectSlug: 'wheelofsuccess',
    projectTags: 'htmlcss,javascript',
    projectThumb: 'img/thumb-wheel.jpg',
    projectImage: 'img/image-wheel.jpg',
    projectURL: 'https://github.com/RachelTyJohnson/treehouse-fewd-project6',
    projectDescription: 'Description for Wheel of Success'
  },
  {
    projectName: "Searchable Photo Gallery",
    projectSlug: 'searchablephotogallery',
    projectTags: 'htmlcss,javascript',
    projectThumb: 'img/thumb-gallery.jpg',
    projectImage: 'img/image-gallery.jpg',
    projectURL: 'https://github.com/RachelTyJohnson/treehouse-fewd-project5',
    projectDescription: 'Description for Searchable Photo Gallery'
  }
];

//function to set page content
function setPageContent(pageIndex){
  $('.projectName').text(`${portfolioItems[pageIndex].projectName}`);
  $('.projectImage').attr('src', `../${portfolioItems[pageIndex].projectImage}`);
  $('.projectLink').attr('href', `${portfolioItems[pageIndex].projectURL}`);
  if ( portfolioItems[pageIndex].projectURL.includes('github') ) {
    $('.btn.projectLink').text(`VIEW GITHUB REPO`);
  }
  $('.projectDescription').html(`${portfolioItems[pageIndex].projectDescription}`);
  let skills = portfolioItems[pageIndex].projectTags.split(",");
  $.each(skills, function(index,value){
    if (skills[index]==="htmlcss"){skills[index]="html/css";}
    $('.single-skills ul').append(`<li>${skills[index]}</li>`)
  });
}
