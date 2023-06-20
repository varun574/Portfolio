export const slide_all_directions = [
    {
        direction : "right",
        initial : {transform:"translateX(-20%)", opacity:0},
        whileInView : {transform:"translateX(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    },
    {
        direction : "down-right",
        initial : {transform:"translateX(-20%) translateY(-20%)", opacity:0},
        whileInView : {transform:"translateX(0%) translateY(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    },
    {
        direction : "down-left",
        initial : {transform:"translateX(20%) translateY(-20%)", opacity:0},
        whileInView : {transform:"translateX(0%) translateY(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    },
    {
        direction : "left",
        initial : {transform:"translateX(20%)", opacity:0},
        whileInView : {transform:"translateX(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    },
    {
        direction : "up-right",
        initial : {transform:"translateX(-20%) translateY(20%)", opacity:0},
        whileInView : {transform:"translateX(0%) translateY(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    },
    {
        direction : "up",
        initial : {transform:"translateY(20%)", opacity:0},
        whileInView : {transform:"translateY(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    },
    {
        direction : "down",
        initial : {transform:"translateY(-20%)", opacity:0},
        whileInView : {transform:"translateY(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    },
    {
        direction : "up-left",
        initial : {transform:"translateX(20%) translateY(20%)", opacity:0},
        whileInView : {transform:"translateX(0%) translateY(0%)", opacity:1}, 
        transition : {ease:'easeOut', duration:1}
    }
]