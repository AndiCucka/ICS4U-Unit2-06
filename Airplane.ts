/*
 * Airplane class.
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-04-13
 */

export class Airplane {
    // variables
    private speed: number
  
    /*
    * constructor
    */
    constructor() {
        this.speed = 0
    }
  
    /*
    * This method sets the speed
    */
    public setSpeed(newSpeed: number) {
        this.speed = newSpeed
    }

    /*
    * This method gets the speed
    */
    public getSpeed(): number {
      return this.speed
    }
}
