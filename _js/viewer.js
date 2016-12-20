document.getElementById('modal').addEventListener('click', function (e) {
    e.stopPropagation()
})
var modelLoader = {
    modelName: '',
    json: '',
    textures: []
}

function loadjson(file) {
    var reader = new FileReader()
    reader.onload = function (e) {
        modelLoader.modelName = file.name
        modelLoader.json = e.target.result
        document.getElementById('models').innerHTML = '<tr><td>' + file.name + '</td></tr>'
    }
    reader.readAsText(file)
    document.getElementById('loadmodel').value = ''
}


function openModal() {
    modelLoader = {
        modelName: '',
        json: '',
        textures: []
    }
    document.getElementById('models').innerHTML = ''

    document.getElementById('loadmodel').value = ''

    document.getElementById('modaltitle').innerHTML = 'Load model'
    document.querySelector('.overlay').setAttribute('style', 'display: block;')
}

function loadthing() {
    try {
        var newmodel = new JsonModel('demo', modelLoader.json, modelLoader.textures)
        try {
            viewer.remove('demo')
        } catch (e) {
            console.log(e.message)
        }
        model = newmodel
        viewer.load(model)
        document.getElementById('displayOption').value = 'block'
        document.querySelector('.overlay').setAttribute('style', 'display: none;')
    } catch (e) {
        window.alert('Error: ' + e.message)
        console.log(e.message)
    }
}