
export class MyCourseService{

    arrobj=[
        {
            name:"Angular 8",
            duration:45,
            mode:'online',
            fees:1000
        },
        {
            name:"Vue Js",
            duration:45,
            mode:'online',
            fees:2000
        },
        {
            name:"Embber Js",
            duration:45,
            mode:'online',
            fees:3000
        }
    ];

    getCourseDetails(){
        return (this.arrobj);
    }

}