'use strict'



function inti() {

}

function projList(){

}

function _createProject (id, name, title, dece, url, label){
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