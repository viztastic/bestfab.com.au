import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headlines = [
    {
      projectName:    "Scotch College",
      client:         "Scotch College",
      serviceSummary: "Supply, Fabrication, Painting, Structural Steel Installation",
      vignetteBgClass: 'scotch_home',
      description: `
        <p className="projectDescription">Architectural metal fabrication and installation at one of Australia's most prestigous schools.</p>
      `,
    },
    {
      projectName:    "Hawkstowe Station",
      client:         "Sctoch College",
      serviceSummary: "Supply, Fabrication, Painting, Structural Steel Installation",
      vignetteBgClass: 'hawkstowe_station',
      description: `
        <p className="projectDescription">$600M project completed in August 2018. The three new stations are expected to cater for up to 8,000 commuters a day, using 2,000 new car parks to help ease congestion along Plenty Road.</p>
      `,
    },
    {
      projectName:    "EJ Whitten",
      vignetteBgClass: 'ejbridge',
      description: `
        <p className="projectDescription">$300m structure completed in Oct 2018. M80 Ring Road/EJ Whitten bridge upgrade with more than 13 kilometres of new lanes now open, months ahead of schedule.</p>
      `,
    },
    {
      projectName:    "Box Hill Hospital",
      vignetteBgClass: 'boxhill_hospital',
      description: `.
        <p className="projectDescription">$150M project. Box Hill Hospital is the largest of acute hospitals admitting more than 48,000 patients each year. It has 398 inpatient beds, six operating theatres and an emergency department that receives more than 42,000 presentations each year.</p>
      `,
    },
    {
      projectName:    "Keilor Basketball Stadium",
      client:         "Brimbank City Council",
      serviceSummary: "Supply, Fabrication, Painting, Structural Steel Installation",
      projectBudget:  "7.2 million",
      images:         [''],
      vignetteBgClass: 'keilor_stadium',
      imageClasses: ['keilor_stadium_interior', 'keilor_stadium_wip'],
      description: `
        <p className="projectDescription">Expansion of the existing Keilor Park Basketball centre comprised the addition of a 3 court stadium attached to the southern end of the existing main entry and foyer.</p>
        <p>Works included an early works package to provide temporary access into the existing foyer and courts prior to construction of the new stadium. Design/Construct new 3 court stadium comprised earthworks to bench to site, reinforced concrete footing slab, structural steel framing with epoxy paint finish, precast dado walls with sandwich panel cladding above, metal deck roofing and ASF/Aura approved timber sports floor.</p>
      `,
    },
    {
      projectName:    "Bunnings Mentone &#38; CarrumDowns",
      client:         "Bunnings",
      builder:        "ADCO Construction Pty Ltd",
      serviceSummary: "Supply, Fabrication, Painting and Installation of Structural Steel",
      projectBudget:  "$10 - $12 million",
      projectStatus:  "Structure completed in Feb 2015.",
      images:         [''],
      vignetteBgClass: 'bunnings_exterior',
      imageClasses:   ['bunnings_wip', 'bunnings_wip2'],
      description:`
        <p className="projectDescription">Along with ADCO construction, Best Fab continued to assist the Bunnings Group with their aggressive store roll out throughout Australia.  These projects ranging in value from $8 million to $40 million over the last 5 years. Key challenges included the delivery of large scale services infrastructure and road works as well as the delivery of over 18,000m2 of retail area. Best Fab supplied and installed the structural steel for the $10 million Carrum Downs and $12 million Mentone projects in Victoria. </p>
      `,
    },
    {
      projectName:    "Victorian Schools Project",
      client:         "Victorian State Government",
      builder:        "WATPAC Construction Pty Ltd",
      serviceSummary: "Supply, Fabrication, Painting and Installation of Structural Steel",
      projectBudget:  "$291 million",
      projectStatus:  "Structure completed in May 2016. Classes to commence from February 2017.",
      images:         [''],
      vignetteBgClass: "vic_schools_exterior",
      imageClasses:   ['vic_schools_interior', 'vic_schools_interior_court'],
      description:
                      `
                       <p className="projectDescription">Watpac, as part of the Learning Communities Victoria consortium, will deliver the New Schools Project PPP for the Victorian State Government. The consortium brings together the expertise of Watpac as builder, Amber Infrastructure and Spotless Group to build and maintain 15 new government schools across Victoria, including primary, secondary and special schools, in addition to some community facilities and Games Hall. As Victoria’s largest new school building project, the schools will be located in the state’s fastest growing areas.</p>
                      `,
    },
  ];
  effect = 'scrollx';

}
