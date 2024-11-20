import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillDataService {
  private storageKey = 'skillsData';

  setSkillsData(data: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getSkillsData(): any {
    const savedData = localStorage.getItem(this.storageKey);
    const parsedData = savedData ? JSON.parse(savedData) : null;
  
    
    if (parsedData && parsedData.files) {
      parsedData.files = parsedData.files.map((file: any) => ({
        name: file.name || 'File senza nome',
        url: file.url || '',
        type: file.type || 'unknown'
      }));
    }
  
    return parsedData;
  }
  
  

  clearSkillsData(): void {
    localStorage.removeItem(this.storageKey);
  }
}
