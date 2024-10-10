import StudentCard from "./components/card";

export default function Home() {
  return (
   <div>
    
    <StudentCard
    name="Dilbar ali"
    rollno="00247910"
    distanceLearning="No"
    city="Karachi"
    center="Governor House"
    campus="Main"
    daysTime="Monday"
    batch="1"
    />
    <br/>
    <center>
    <StudentCard
    name="Shahid ali"
    rollno="00293910"
    distanceLearning="No"
    city="Karachi"
    center="Governor House"
    campus="Main"
    daysTime="Tuesday"
    batch="1"
    />
    </center>
     <br/>
    <StudentCard
    name="Ahmed ali"
    rollno="00353910"
    distanceLearning="No"
    city="Karachi"
    center="Governor House"
    campus="Main"
    daysTime="friday"
    batch="1"
    />
    

   </div>
 
  );
}

