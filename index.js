function newImage(source, left, bottom) {
    let image = document.createElement("img");
    image.src = source;
    image.style.position = "fixed";
    image.style.left = left + "px";
    image.style.bottom = bottom + "px";
    document.body.append(image)
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

function newItem(source, left, bottom) {
    let item = document.createElement("img");
    item.src = source;
    item.style.position = "fixed";
    item.style.left = left + "px";
    item.style.bottom = bottom + "px";
    document.body.append(item)

    item.addEventListener("dblclick", function(){
     item.remove()
    })
}

newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100)