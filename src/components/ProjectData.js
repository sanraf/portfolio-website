import { render } from '@testing-library/react';
import React, { Component } from 'react';
import overvewImage from '../Assets/overview-illustration.png'
import challengeImage from '../Assets/challeges-illustration.png'
import technologyImage from '../Assets/technology-illustration.png'

const smartNoteOverview =
"A Java-based Android note-taking app utilizing Room Database for reliable storage. It offers a user-friendly interface for creating, editing, and deleting notes, ensuring seamless retrieval and easy organization on the go";

const smartScanOverview =
"Smart Scan is an Android app for scanning image to text using google lens and images fron device, It creates and scan QR Code. It features an intuitive interface, Room Database for data storage,"

const smartBookOverview=
"Smart Books is a Java-based Android app designed for an engaging reading experience. It features a collection of short stories and PDFs, a user-friendly interface for easy navigation, and uses Room Database for efficient data management, allowing readers to enjoy stories anytime, anywhere.";

const joyTechOverview =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const novelNestOverview =
"Novel Nest is an online platform for buying and selling books. It offers a wide range of titles, an easy-to-use interface, and secure transaction processing for a convenient book shopping experience";

const schoolWebOverview =
"School-website is a web app for students featuring React and Spring Boot, offering tools for AP score calculation, and access to posts, galleries, and blogs. It provides a smooth user experience and strong data handling to enhance education";

const eziVoteOverview =
"EziVote is an online voting platform combining Spring Boot for backend operations and React for a smooth frontend. It offers secure user authentication, robust data management, and an intuitive React interface for a straightforward voting process.";

const pmsOverview =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Dignissim convallis aenean et tortor at risus viverra adipiscing.";


class ProjectData extends Component {




  SmartNote(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
          {smartNoteOverview}
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; Implementing fast and accurate search within notes <br />
            &#x27A5; Deprecated Database dependecy for specific sdk<br />
            &#x27A5; Providing backup data<br />
            &#x27A5; Setting up notification <br />
            &#x27A5; Implementing sharing method <br />
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database <br />
        &#x27A5; Java <br />
        &#x27A5; Third party libraries <br />
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  SmartScan(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
          {smartScanOverview}
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database <br />
        &#x27A5; Google lens library <br />
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  SmartBook(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
          {smartBookOverview}
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; Configuring firebase <br />
            &#x27A5; Configuring banner ad <br />
            &#x27A5; Implemention Text To Speech 'TTS' 
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Firebase Database <br />
        &#x27A5; Glide library 
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  joyTech(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
          {joyTechOverview}
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database <br />
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  NovelNest(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
          {novelNestOverview}
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database <br />
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  SchoolWeb(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
         {schoolWebOverview}
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database <br />
        &#x27A5; Java <br />
        &#x27A5; Android Studio <br />
        &#x27A5; Room Database
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  EziVote(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
         {eziVoteOverview}
     
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
        &#x27A5; Java <br />
        &#x27A5; Spring boot <br />
        &#x27A5; React js <br />
        &#x27A5; MYSQL Database
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  PMS(){return[
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
         {pmsOverview}
     
        </p>
      ),
      backgroundImage: overvewImage,
      backgroundColor:'#022F46',
      color: '#23857a'   },
    {
      id: 2,
      title: "Challenges",
      content: (
        <p className='overview'>
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1 <br />
            &#x27A5; challenge1
        </p>
     
      ),
      backgroundImage: challengeImage,
      backgroundColor:'#008484',
        color: '#012a3f'
    },
    {
      id: 3,
      title: "Used Technologies",
      content: (
        <p className='overview'>
            &#x27A5; Java <br />
            &#x27A5; Spring boot <br />
            &#x27A5; Spring security <br />
            &#x27A5; React js <br />
            &#x27A5; MYSQL Database
        </p>
      ),
      backgroundImage:technologyImage,
      backgroundColor:'#00586E',
        color: '#00C6B2'
    }
  ]}

  render() {
    // This component does not render anything visually.
    return null;
  }
}


export default ProjectData

