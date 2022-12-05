'use strict'

$(onInit)


function onInit() {
    renderProtfolio()
    
}


function renderProtfolio() {
    const projects=getProjectBack()
    var strHTMLs=''
    strHTMLs=projects.map(project=>
    `
    <div data="${project.id}" class="col-md-4 col-sm-6 portfolio-item px-3 projectRender" onClick="onInfo(this)">
        <a class="portfolio-link try" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x forInfo"></i>
                </div>
            </div>
            <img class="fitted img-fluid" src="img/projects/${project.id}-fitted.png" alt="project ${project.name}">
        </a>
        <div class="portfolio-caption">
            <h4>Threads</h4>
            <p class="text-muted"></p>
        </div>
    </div> 
`
    )
    // strHTMLs.join('')
    $('.Protfolios').html(strHTMLs)
    // addCarEventListeners()
}

// function pushData(){
//     console.log('ok:')
// }

function onInfo(info){
    const carId =info.attributes.data.value
    const project=getSingleProject(carId)
    console.log('project:', project.id)
    $(".modal-body h2 span").text(project.name)
    $(".modal-body p span").text(project.title)
    $("#bigPicture").attr('src',"img/projects/"+project.id+".png")
    // $("#bigPicture").attr('src', $("#bigPicture").attr("src").replace(gLastImg, `${project.id}`))
    $(".desc").text(project.desc)
}

$(".projectRender").on('click', function (e){
    console.log('in:')
})






function addProjectEventListeners() {
    // $('.btn-remove').on('click', function () {
    //     const carId = $(this).closest('.car-preview').data('carId')
    //     onDeleteCar(carId)
    // })

    // $('.btn-read').on('click', function () {
    //     const carId = $(this).closest('.car-preview').data('carId')
    //     onReadCar(carId)
    // })

    // $('.btn-update').on('click', function () {
    //     const carId = $(this).closest('.car-preview').data('carId')
    //     onUpdateCar(carId)
    // })
}

function slideToContact() {
    $('html,body').animate({ scrollTop: $(".contacMe").offset().top }, 'slow')
    openCanvas()
}



// <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="project ${project.name}">