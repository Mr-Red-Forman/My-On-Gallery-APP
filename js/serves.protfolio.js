'use strict'

var projects={}
var projectInfo
const KEY='protfolioDB'

function getProjectBack(){
    _getProjectObject()
    _getProjs()
    return projects
}

function getSingleProject(id){
    const proj=projects.find(p=> p.id===id)
    return proj
}

function _getProjectObject(){
    projectInfo=[
        {
            id:"game1",
            name:"Chaess",
            title:"Chaess game to play one aginst the other",
            desc: "Project who be start by the techers and was complited by me",
            url: "https://www.google.co.il/",
            lable:['Game', 'Thinking', 'Black and White']
        },
        {
            id:"game2",
            name:"Packman",
            title:"Packman game who is custom to our days",
            desc: "Project who be start by the techers and was complited by me",
            url: "https://www.google.co.il/",
            lable:['Packman', 'Time', 'Eat and win']
        },
        {
            id:"game3",
            name:"BookStore",
            title:"Book list who can be controled by the bookkeeper",
            desc: "My own book storage projecte made by me",
            url: "https://www.google.co.il/",
            lable:['Books', 'Adding', 'Read']
        },
        {
            id:"game4",
            name:"Mineswepper",
            title:"Mine Swepper to play around and feel in the 90th's",
            desc: "Mine swepper to make fun with your self and save the world",
            url: "https://red-foramn.github.io/Mine-swapper/",
            lable:['MineSwpper', 'Race', 'Until the death']
        },
    ]
}

function _getProjs(){
    projects=loadFromStorage(KEY)
    if (!projects){
        projects=projectInfo.map(proj=>_createProject(
            proj.id,
            proj.name,
            proj.title,
            proj.desc,
            proj.url,
            proj.label
        ))
    }

}

function _createProject (id, name, title, desc, url, label){
    return{
        id,
        name,
        title,
        desc,
        url,
        publishedAt:Date.now(),
        label
    }
}


