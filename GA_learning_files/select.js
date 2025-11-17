var currentSimList = ["LLFF", "mipnerf360_16x", "mipnerf360_8x"];
var currentSim = "LLFF";
var currentSimId = 0;
// var currentSceneList = ["fern", "flower", "leaves", "fortress", "horns", "room", "trex", "orchid", "bicycle", "bonsai", "counter", "flower", "garden", "kitchen", "room", "stump", "treehill", "bicycle", "bonsai", "counter", "flower", "garden", "kitchen", "room", "stump", "treehill"];
var currentSceneList = ["trex", "flower", "leaves", "horns", "room", "bicycle", "bonsai", "garden", "kitchen", "stump", "treehill", "bicycle", "bonsai", "garden", "kitchen", "stump", "treehill"];
var currentScene = "trex";
var currentSceneId = 0;
// var currentMethodList = ["ours", "StableSR", "Comparison"];
// var currentMethodList = ["Comparison", "StableSR", "Ours", "Indep"];
var currentMethodList = ["LR", "StableSR", "SuperGaussian"];
var currentMethod = "LR";
var currentMethodId = 0;


function ChangeSim(idx){
    var li_list = document.getElementById("sim-view-ul").children;
    console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }
    li_list[idx].className = "active";

    currentSim = currentSimList[idx];
    currentSimId = idx;
    
    // Method side
    var m_list = document.getElementById("method-view-ul").children;
    m_list[currentMethodId] = "active";
    // for (i=1;i<m_list.length;i++){
    //     m_list[i].className = "disabled";
    //     console.log(m_list[i].children[0].onclick)
    //     m_list[i].children[0].onclick = "";
    // }
    
    // for (i=0;i<m_list.length;i++){
    //     console.log(m_list[i].children[0].onclick)
    // }
    if(currentSceneId<8){        
        if(idx==0){
            m_list[1].className = "";
            m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
            m_list[2].className = "";
            m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
            // m_list[3].className = "";
            // m_list[3].children[0].onclick = function func(){ChangeMethod(3);}
        }              
    }
    else if(currentSceneId<11){
        if(idx==2){
            m_list[1].className = "";
            m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
            m_list[2].className = "";
            m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
        }
    }
    else{
        if(idx==1){
            m_list[1].className = "";
            m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
            m_list[2].className = "";
            m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
        }
    }


    //document.getElementById("simulation_video").src = "NeRF_editing_files/ours/"+ currentSim + '/' + currentScene + '.mp4';
    document.getElementById("simulation_video").src = "3DSR_files/videos/"+ currentSim + '/' + currentScene + '_comparison_'+currentMethod+'.mp4';
    // ChangeMethod(0);

    if(idx==0) {
        //document.getElementById('stylization-scenes').style.display = "none";
        // document.getElementById('editing-scenes').style.display = "block";
        var li_list = document.getElementById("scene-view-ul").children;
        for(i = 0; i < li_list.length; i++) {
            if(i < 5) {
                li_list[i].style.display = "";
            } else {
                li_list[i].style.display = "none";
            }
        }
        ChangeScene(0);
    } else if(idx==1) {
        var li_list = document.getElementById("scene-view-ul").children;
        for(i = 0; i < li_list.length; i++) {
            if(i < 5) {
                li_list[i].style.display = "none";
            }
            else if(i >=11){
                li_list[i].style.display = "none";
            } 
            else {
                li_list[i].style.display = "";
            }
        }
        ChangeScene(5);
    }
    else{
        var li_list = document.getElementById("scene-view-ul").children;
        for(i = 0; i < li_list.length; i++) {
            if(i < 5) {
                li_list[i].style.display = "none";
            }
            else if(i >=11){
                li_list[i].style.display = "";
            } 
            else {
                li_list[i].style.display = "none";
            }
        }
        ChangeScene(11);
    }
    console.log(m_list);
    resetPlayButton();  // ⏸ Always reset button to Stop
}


function ChangeScene(idx){
    var li_list = document.getElementById("scene-view-ul").children;
    var m_list = document.getElementById("method-view-ul").children;
    
    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }

    m_list[currentMethodId].className = "active";
    console.log("currentMethodId:", currentMethodId);
    if (idx>=8){
        li_list[idx].className = "active";
        // m_list[1].className = "";
        m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
        // m_list[2].className = "";
        m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
        for (i=3;i<m_list.length;i++){
            m_list[i].className = "disabled";
            m_list[i].children[0].onclick = "";
        }
    }
    else{
        li_list[idx].className = "active";
        // m_list[1].className = "";
        m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
        // m_list[2].className = "";
        m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
        // m_list[3].className = ""
      
    }
    
    currentScene = currentSceneList[idx];
    currentSceneId = idx;

    let video = document.getElementById("simulation_video")
    let container = video.parentNode
    //video.src = "3DSR_files/ours/"+ currentSim + '/' + currentScene + '.mp4';
    // video.src = "3DSR_files/videos/"+ currentMethod +'/'+ currentSim +'/'+ currentScene + '_' + currentMethod + '.mp4';
    video.src = "3DSR_files/videos/"+currentSim+"/"+ currentScene + '_comparison_'+currentMethod+'.mp4';
    container.style = "width: 60%; opacity: 0;"
    setTimeout(()=>{
        container.style = "width: 60%; opacity: 1;"
        video.load();
    }, 1000)
    console.log(idx);
    console.log(li_list);

    // ChangeMethod(0);
    resetPlayButton();  // ⏸ Always reset button to Stop
}

function ChangeMethod(idx){
    var li_list = document.getElementById("method-view-ul").children;
    
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    currentMethod = currentMethodList[idx]
    
    //document.getElementById("baseline").src = "3DSR_files/" + currentMethod +'/'+ currentSim +'/'+ currentScene + '.mp4';
    // document.getElementById("baseline").src = "3DSR_files/videos/" + currentMethod +'/'+ currentSim +'/'+ currentScene + '_' + currentMethod + '.mp4';
    // document.getElementById("simulation_video").src = "3DSR_files/videos/" + currentMethod +'/'+ currentSim +'/'+ currentScene + '_' + currentMethod + '.mp4';
    
    // Temporarily comment out
    // document.getElementById("baseline").src = "3DSR_files/videos/"+currentSim+"/"+ currentScene + '_comparison_'+currentMethod+'.mp4';
    document.getElementById("simulation_video").src = "3DSR_files/videos/"+currentSim+"/"+ currentScene + '_comparison_'+currentMethod+'.mp4';

    // document.getElementById("baseline").src = "3DSR_files/videos/"+currentSim+"/"+ currentScene + "_LR.mp4";
    // document.getElementById("simulation_video").src = "3DSR_files/videos/"+currentSim+"/"+ currentScene + '_ours.mp4';
    
    if(idx == 0){
        document.getElementById("simulation_video").style="width:60%";
        // document.getElementById("baseline").style="width:0%";
    }
    else if(idx >= 1){        
        document.getElementById("simulation_video").style="width:60%";
        // document.getElementById("baseline").style="width:00%";
    }
    console.log("Switching to method:", currentMethod);
    currentMethodId = idx
    console.log(idx);
    console.log(li_list);
    resetPlayButton();  // ⏸ Always reset button to Stop
}