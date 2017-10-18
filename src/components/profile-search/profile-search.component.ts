import {Component} from '@angular/core';
import {Profile} from '../../models/profile/profile.interface';
import {DataService} from '../../providers/data.service';


@Component({
    selector: 'app-profile-search',
    templateUrl: 'profile-search.component.html'
})

export class ProfileSearchComponent{
    query:string;
    profileList: Profile[]//we know that search query will have a list of profile back

    constructor (private data: DataService){

    }

    searchUser(query:string){
        this.data.searchUser(query).subscribe(profiles=>{
            console.log(profiles);
            this.profileList=profiles;
        })
    }


}
