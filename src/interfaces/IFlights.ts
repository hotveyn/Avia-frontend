import IFlight from "@/interfaces/IFlight";

export default interface IFlights{
    flight_to: IFlight[]
    flight_back?: IFlight[]
}