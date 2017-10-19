import {Component,Output,EventEmitter} from '@angular/core';
import {Profile} from '../../models/profile/profile.interface';
import {DataService} from '../../providers/data.service';


@Component({
    selector: 'app-profile-search',
    templateUrl: 'profile-search.component.html'
})

export class ProfileSearchComponent{
    query:string;
    profileList: Profile[]//we know that search query will have a list of profile back

    @Output() selectedProfile: EventEmitter <Profile>

    constructor (private data: DataService){
      this.selectedProfile=new EventEmitter<Profile>();
    }

    searchUser(query:string){
      const trimmedQuery=query.trim();  //Simply disregard the white spaces after the name. Does not check for lower and upper case. More need to be implemented for a better search-->Maybe turn all the alphabets to upper case or lower case before you query the database
      if (trimmedQuery===query){
        this.data.searchUser(query).subscribe(profiles=>{
            console.log(profiles);
            this.profileList=profiles;
        })
      }
    }

    selectProfile(profile:Profile){
      this.selectedProfile.emit(profile);

    }


}
