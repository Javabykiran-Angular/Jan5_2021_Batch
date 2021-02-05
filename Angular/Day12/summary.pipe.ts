import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})
export class SummaryPipe implements PipeTransform{
    // transform(value: any,startindex:number,endindex:number) {
        transform(value: any,startindex:number=0,endindex:number=15) {

        if(value==null){
            return value;
        }

        let temp= ( <string> value);

        let minindex=(startindex)?startindex:0;
        let maxindex=(endindex)?endindex:15;
      
        // return (temp.substring(0,15)+" ...");
        // return (temp.substring(startindex,endindex)+" ...");
        // return (temp.substring(minindex,maxindex)+" ...");
        return (temp.substring(startindex,endindex)+" ...");




    }

}