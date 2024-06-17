import { render } from '@testing-library/react';
import React, { Component } from 'react';
import overvewImage from '../Assets/overview-illustration.png'
import challengeImage from '../Assets/challeges-illustration.png'
import technologyImage from '../Assets/technology-illustration.png'

const smartNoteOverview =
"The Android Java-based note-taking app, powered by Room Database, simplifies note organization and management. With a user-friendly interface, users can effortlessly create, edit, and delete notes on the go. Reliable storage and seamless retrieval ensure productivity and accessibility";

const smartScanOverview =
"NOTHING TO SHOW"

const smartBookOverview=
"Smart Books is an Android Java-based book app is tailored for immersive reading experiences, offering users access to a curated selection of short stories and PDFs. With a sleek interface optimized for storytelling, users can easily navigate through various genres and dive into captivating narratives. Powered by Room Database, the app guarantees seamless storage and retrieval, ensuring users can enjoy their favorite stories on the go";

const joyTechOverview =
"EziVote: A dynamic online voting platform crafted with Spring Boot for backend functionality and React for a seamless frontend experience. Users are empowered with secure login and registration features, while our Java-powered backend ensures robust authentication and data management. With a user-friendly interface powered by React.";

const novelNestOverview =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Dignissim convallis aenean et tortor at risus viverra adipiscing.";

const schoolWebOverview =
"School-website is  web-based school app, combining React frontend and Spring Boot backend, empowers students to calculate AP scores and access posts, galleries, and blogs. With a user-friendly interface and robust data management, it enriches learning experiences and fosters academic growth.";

const eziVoteOverview =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Dignissim convallis aenean et tortor at risus viverra adipiscing.";

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

  render() {
    // This component does not render anything visually.
    return null;
  }
}


export default ProjectData

