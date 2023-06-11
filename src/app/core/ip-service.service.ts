import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  constructor() { }

  getIpAddress(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      axios.get('https://api.ipify.org?format=json')
        .then(response => {
          const ipAddress = response.data.ip;
          resolve(ipAddress);
        })
        .catch(error => { reject(error) });
    });
  }

  saveIpAddressToFile(ipAddress: string): void {
    const fileContent = `IP Address: ${ipAddress}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    alert(ipAddress);
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'ip_address.txt';
    downloadLink.click();
  }
}
