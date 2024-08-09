import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LostarkService {
  private readonly baseURL = 'https://developer-lostark.game.onstove.com';
  private readonly bearerToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1NDgwNjEifQ.oMiJvSV-qqo8tex86MiSWIj7epDZNIqeIpEXxWnxf4pM3whBRzVaEDhG6dEt675-arJR9jpB3ZdUxLHSyEewc-MwEdESQ0GMDBUQKKXd0KxdKuyP6WJ7hKQQvCSXEodlGoldvYQ4PYwKNfynhovPbRpqV4yEMeS73aRxw9_SdqXPzy448eEJ4gu89jurZCEnk69fn7fgYm2TBhlS8_GDPBaxItuH4I1b6Lcq5oProAGUpM2yH742DeYKxTJMJ4BrBgZCogHXjjHzmP5bRDCo1Fz7Fgdy6OCSW2oR_IBsczinvdQivG0gYrE8M-_r96-B5nvmEIcmqQ6RXaBKWAL9RQ';

  constructor() {}

  async getCharacterSiblings(characterName: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseURL}/characters/${characterName}/siblings`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.bearerToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching character siblings: ', error);
      throw error;
    }
  }

  async getCharacterArmories(characterName: string, url: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseURL}/armories/characters/${characterName}${url}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.bearerToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching getCharacterArmories: ', error);
      throw error;
    }
  }

  async getAcution(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseURL}/auctions/options`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.bearerToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching auction: ', error);
      throw error;
    }
  }
}
