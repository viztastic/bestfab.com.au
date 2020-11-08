import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services = [
    {
      serviceName: 'Project Management',
      img: "/assets/img/services/pm.jpg",
      serviceDescription:  "Experience enables our managers to quickly understand the scope of your Project and provide immediate and valuable support. Every Project is directed by a Project coordinator giving the Client one contact through the duration of their job.",
      servicePoints: [
        "Project Scoping",
        "Project Management",
        "Governance and Delivery"
      ]
    },
    {
      serviceName: 'Estimating',
      img: "/assets/img/services/estimating.jpg",
      serviceDescription:  "Our estimators are all leaders in their field. There experience and in-depth knowledge of process and fabrication ensures that estimates are precise. We take great pride in ensuring that our estimates are both comprehensive and competitive.",
      servicePoints: [
        "Project Estimation",
        "Advisory"
      ]
    },
    {
      serviceName: 'Drafting Services',
      img: "/assets/img/services/drafting.jpg",
      serviceDescription:  "Our drafting services are capable of doing both Structural Steel and Miscellaneous Metal drawings. Armed with the technology, Computer Aided Design, Computer Steel Detailing Programs are available to assist draftsman to achieve the best possible results every time.",
      servicePoints: [
        "CADS",
        "Structural",
        "Miscellaneous Metals"
      ]
    },
    {
      serviceName: 'Steel Fabrication',
      img: "/assets/img/services/fabrication.jpg",
      serviceDescription:  "Our services are used by the wide range of customers with variable applications. For example Fabrication of steel for commercial, industrial, institutional and residential type buildings, along with infrastructure and health care sector. With a Project capacity exceeding 50,000 tons per year (along with our fabrication partners in Asia Pacific region). Our facility spread over 8000m2, includes a large fabrication shop with 5 overhead cranes and huge open storage yard.",
      servicePoints: [
        "Industrial",
        "Commercial",
        "Residential",
        "Architectural"
      ]
    },
    {
      serviceName: 'Architectural Metal',
      img: "/assets/img/services/architectural.jpg",
      serviceDescription:  "We are the specialist manufacturer of all types of architectural structures (Mild Steel, Stainless Steel, Aluminium, Brass, Glass. This includes perforated metal facade, Alucobond, special metal cladding, balustrades,domes, catwalks, stairs, frames, handrails, ladders, guard rails etc.",
    },
    {
      serviceName: 'Installation',
      img: "/assets/img/services/installation.jpg",
      serviceDescription:  "We provide the complete solution from fabrication to erection and installation of structural steel, gantries, barrier rails, alucabond, concrete panels and louvers. Best Fab’s capacity in rigging exceeds 5000 tons.",
      servicePoints: [
        "Structural steel",
        "Gantries",
        "Barrier Rails",
        "Alucabond"
      ]
    }
  ]
}
