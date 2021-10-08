class ListBinding{

    constructor(myList){
        this.listElement = myList
        this.textList = []
    }

    // Create an <li>text</li> tag
    static createListItem(text){
        const li = document.createElement('li')
        li.textContent = text
        return li
    }


    update(){
        // Remove all axisting <li> elements/tags 
        while(this.listElement.firstChild){
            console.log(`Removing: ${this.listElement.firstChild}`)
            this.listElement.removeChild(this.listElement.firstChild)
        }

        // Fill <ul>/<ol> tag with <li>
        for(const text of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
    }
    
    add(text){
        this.textList.push(text)
        this.update()
    }

    remove(index){
        this.textList.splice(index, 1)
        this.update()
    }

}