import IAirport from "@/interfaces/IAirport";

export default interface IFlight{
    flight_id: number
    flight_code: string
    from: IAirport,
    to: IAirport
    cost: number,
    availability: number
}