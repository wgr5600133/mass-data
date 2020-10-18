$(document).ready(function () {

    $("#hot-button").click(function (e) {
        DeactivateOtherButton("hot-button")
        $("#content-container").empty()
        // post ajax here
    })
    $("#recommend-button").click(function (e) {
        DeactivateOtherButton("recommend-button")
        $("#content-container").empty()
        // post ajax here
    })
    $("#content-container").on("click","a",function (e) {
        if($(e["currentTarget"]).attr("aria-label")==="comment"){
            let comment_container = $(e["currentTarget"]).parent().parent().find(".comment-container")
            if(comment_container.hasClass("disappear")){
                comment_container.removeClass("disappear")
            }else{
                comment_container.addClass("disappear")
            }
        }
    })
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    function DeactivateOtherButton(id) {
        /**
         * Deactivate other button expert input button in context-container control field
         * @param button id
         */
        let children = $("#content-container-control").find("a")
        for(let index=0;index<children.length;index++){
            if($(children[index]).attr("id") === id){
                if(!$(children[index]).hasClass("active-blue")){
                    $(children[index]).addClass("active-blue")
                }
            }else{
                $(children[index]).removeClass("active-blue")
            }
        }
    }
})