import { Component, OnInit } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-end-section',
  templateUrl: './end-section.component.html',
  styleUrls: ['./end-section.component.css']
})
export class EndSectionComponent implements OnInit  {
  
  ngOnInit(): void {
   
  }


  

  


  mainTitle = 'Get Started';
  buttonLink = 'https://www.coursera.org/degrees/master-of-applied-data-science-umich/admissions';
  buttonText = 'Learn more about the application requirements';
  imageUrl = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7IfRET7MX2Jwqa7BEzuT5K/54802b836de07f0b0cb194b62c331886/Umich-Mads-GetStarted.jpg?auto=format%2Ccompress&dpr=1';
  imageAlt = 'Inizia Subito';

  
  

  courses = [
    {
      description: 'Interested in this degree? Need more programming experience? The following two specializations from University of Michigan will give you the Python and statistics background needed to begin the Master of Applied Data Science degree:',
      link: 'https://www.coursera.org/specializations/python-3-programming',
      link1: 'https://www.coursera.org/specializations/statistics-with-python'
    },

    
    
    
  ];

  programCards = [
    {
      imgSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1d5dvr3KT3ofnqEbrCm6gG/2e7b1d8db56f9052353a8d209373a210/Umich-MADS-Careers.jpg?auto=format%2Ccompress&dpr=1',
      imgSrcset: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1d5dvr3KT3ofnqEbrCm6gG/2e7b1d8db56f9052353a8d209373a210/Umich-MADS-Careers.jpg?auto=format%2Ccompress&dpr=2 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1d5dvr3KT3ofnqEbrCm6gG/2e7b1d8db56f9052353a8d209373a210/Umich-MADS-Careers.jpg?auto=format%2Ccompress&dpr=3 3x',
      altText: 'Admissions',
      title: 'Admissions',
      description: 'The University of Michigan School of Information’s Master of Applied Data Science welcomes applicants from diverse backgrounds. The curriculum is designed for applicants who want to devote themselves to full-time study, as well as those who want to complete their degree while working.',
      link: 'https://www.coursera.org/degrees/master-of-applied-data-science-umich/admissions'
    },
    {
      imgSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3QFv67milyRw2ZQPJ3XMhQ/9c4cf10353b973fd05acb0177801070a/Umich-Mads-Admissions.jpg?auto=format%2Ccompress&dpr=1',
      imgSrcset: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3QFv67milyRw2ZQPJ3XMhQ/9c4cf10353b973fd05acb0177801070a/Umich-Mads-Admissions.jpg?auto=format%2Ccompress&dpr=2 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3QFv67milyRw2ZQPJ3XMhQ/9c4cf10353b973fd05acb0177801070a/Umich-Mads-Admissions.jpg?auto=format%2Ccompress&dpr=3 3x',
      altText: 'Academics',
      title: 'Academics',
      description: 'The Master of Applied Data Science Program equips students with the skills needed to apply data science in any number of real world contexts. It blends theory, computation, and application in a flexible online format.',
      link: 'https://www.coursera.org/degrees/master-of-applied-data-science-umich/academics'
    },

    {
      imgSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/18VDQfKIhcwnmRDn8ZSj4n/ccb49dc29284d7d4a051dc1bd7fb1848/Umich-MADS-Academics.jpg?auto=format%2Ccompress&dpr=1',
      imgSrcset: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/18VDQfKIhcwnmRDn8ZSj4n/ccb49dc29284d7d4a051dc1bd7fb1848/Umich-MADS-Academics.jpg?auto=format%2Ccompress&dpr=2 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/18VDQfKIhcwnmRDn8ZSj4n/ccb49dc29284d7d4a051dc1bd7fb1848/Umich-MADS-Academics.jpg?auto=format%2Ccompress&dpr=3 3x',
      altText: 'Careers',
      title: 'Careers',
      description: 'University of Michigan School of Information master’s students earn the highest average salaries of any graduate program in similar areas of study, and 98%+ of our students report finding jobs in their field of choice.',
      link: 'https://www.coursera.org/degrees/master-of-applied-data-science-umich/careers'
    },
    {
      imgSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/18suwK7pza3dNGqNIATdR8/dfb0fc420e953c4dd96e7e192a48c5ba/Umich-MADS-Student-Experience.jpg?auto=format%2Ccompress&dpr=1',
      imgSrcset: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/18suwK7pza3dNGqNIATdR8/dfb0fc420e953c4dd96e7e192a48c5ba/Umich-MADS-Student-Experience.jpg?auto=format%2Ccompress&dpr=2 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/18suwK7pza3dNGqNIATdR8/dfb0fc420e953c4dd96e7e192a48c5ba/Umich-MADS-Student-Experience.jpg?auto=format%2Ccompress&dpr=3 3x',
      altText: 'Student Experience',
      title: 'Student Experience',
      description: 'Students will have access to renowned University of Michigan faculty and resources. They will also have opportunities to build community with other University of Michigan School of Information students who are working on graduate degrees.',
      link: 'https://www.coursera.org/degrees/master-of-applied-data-science-umich/student-experience'
    },
    {
      imgSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3m4OsvkZpXGOZm0gk1wdTK/de4aea1ef0c109506818271a02b22249/UMich-MADS-AboutUniversity.jpg?auto=format%2Ccompress&dpr=1',
      imgSrcset: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3m4OsvkZpXGOZm0gk1wdTK/de4aea1ef0c109506818271a02b22249/UMich-MADS-AboutUniversity.jpg?auto=format%2Ccompress&dpr=2 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3m4OsvkZpXGOZm0gk1wdTK/de4aea1ef0c109506818271a02b22249/UMich-MADS-AboutUniversity.jpg?auto=format%2Ccompress&dpr=3 3x',
      altText: 'About University of Michigan',
      title: 'about University of Michigan',
      description: 'With 102 top-10 graduate programs, the University of Michigan is ranked as the #1 public research university in the U.S. by the National Science Foundation.',
      link: 'https://www.coursera.org/degrees/master-of-applied-data-science-umich/about'
    },

    {
      imgSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5Aqtj47gSTLoyqSjAXChNA/91239a4a3a0068475086311ad83ec8e5/UMich-MADS-GetStarted2.jpg?auto=format%2Ccompress&dpr=1',
      imgSrcset: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5Aqtj47gSTLoyqSjAXChNA/91239a4a3a0068475086311ad83ec8e5/UMich-MADS-GetStarted2.jpg?auto=format%2Ccompress&dpr=2 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5Aqtj47gSTLoyqSjAXChNA/91239a4a3a0068475086311ad83ec8e5/UMich-MADS-GetStarted2.jpg?auto=format%2Ccompress&dpr=3 3x',
      altText: 'Start Learning',
      title: 'Start Learning',
      description: 'Although not part of the MADS curriculum, we encourage you to enroll in our Python 3 Programming Specialization to preview what it is like to learn from UMSI faculty.',
      link: 'https://www.coursera.org/specializations/python-3-programming#courses'
    }


  ];


  videos = [
    {
      src: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7IO0Nlm3o3ZJMtEVycMCKm/38099c389cae9f66a7efc41e81759df8/Michigan_COURSERA_MADS_Video.jpg?auto=format%2Ccompress&dpr=1',
      srcset: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7IO0Nlm3o3ZJMtEVycMCKm/38099c389cae9f66a7efc41e81759df8/Michigan_COURSERA_MADS_Video.jpg?auto=format%2Ccompress&dpr=2 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7IO0Nlm3o3ZJMtEVycMCKm/38099c389cae9f66a7efc41e81759df8/Michigan_COURSERA_MADS_Video.jpg?auto=format%2Ccompress&dpr=3 3x',
      alt: 'Learn more about Michigan School of Information\'s Master of Applied Data Science Degree',
      title: 'Learn more about Michigan School of Information\'s Master of Applied Data Science Degree',
      buttonLabel: 'Riproduci video'
    }
  ];

  carouselItems = [
    {
      title: 'Dr. Chuck explains why you should apply to MADS',
      description: 'Charles Severance, Clinical Professor of Information at the University of Michigan School of Information and amateur race car driver, explains why you should apply for the Master of Applied Data Science program.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/16xrSpzzb0TzIakeVT6rqx/784d07f886ce6488907778242653af61/MADSDr.Chuck.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://youtu.be/XaZUgHhtpJU'
    },
    {
      title: 'Tips on Transitioning to a FT Data Science Role',
      description: 'Learn a few tips about how to land offers at Fortune 100 and startups alike for the following roles: Lead Data Scientist, Data and Applied Scientist, Machine Learning Engineer, and Principal NLP Engineer.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5rF6rveGEmp3HTbv95hzZZ/21786d34b284444e6fc78461029a0d3f/Master_of_Applied_Data_Science_-_University_of_Michigan_-_Coursera_-_News4.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://medium.com/@authmanapatira/tips-on-transitioning-to-a-ft-data-science-role-992900befc05'
    },
    {
      title: '3 Tips For Preparing Your MADS Application',
      description: 'Getting ready to apply for the Master of Applied Data Science program at the University of Michigan School of Information? Rachael Wiener, Associate Director of Recruiting and Admissions at UMSI, offers some top tips on how to put together a stand-out application.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5PytYW4v2nIDbLoPR5FqZC/c53ef57ebf96d0145ad1e1820d618ce0/News_Section.png?auto=format%2Ccompress&dpr=1',
      link: 'https://www.youtube.com/watch?v=D7bm6HKlS4g'
    },
    {
      title: 'Ask the MADS Grads: Is a remote program an "all by yourself" program?',
      description: "Anupriya Tripathi, a '21 graduate, talks about her experience in the online Master of Applied Data Science program at the University of Michigan School of Information.",
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1aDpD1Gd92CaKGHKZki5qU/3bb0eea155c3d4d82b22337c2e9aaa19/News_Section__1_.png?auto=format%2Ccompress&dpr=1',
      link: 'https://youtu.be/0191EQhY0uU'
    },
    {
      title: 'MADS team designs a new data visualization to help save Great Lakes',
      description: 'Applying data science methodology to the issue of invasive species in the Great Lakes, three UMSI Master of Applied Data Science (MADS) grads have designed a new data visualization to display species impacting or being impacted by invasive species.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7eXUucYLNZ7oWPISEKqiiV/ea73d500458c1661021b5167e2ef0459/MADSStudentsGreatLakes.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://www.si.umich.edu/about-umsi/news/mads-team-designs-new-data-visualization-help-save-great-lakes'
    },
    {
      title: 'Live Q&A with MADS Faculty',
      description: 'MADS faculty members Qiaozhu Mei, Charles Severance and Elle O\'Brien discuss MADS coursework, areas of interest, real-world applications, and faculty expertise.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3cpFgdyLPGtX6991gCtauj/841afb00cd2902835406e5abb712315c/MADS_Faculty_Q_A.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://youtu.be/bOMZiL4ikAI'
    },
    {
      title: 'Watch MADS faculty member Dr. Chuck\'s live Quora session',
      description: 'University of Michigan School of Information Professor Charles "Dr. Chuck" Severance responds to questions on Quora during a live stream.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1YCbIQLNnwYVzdt5pKq5jT/73bf91dfc7c2dc461c82306f6457b79d/Dr.ChuckQuoraSession.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://youtu.be/Dn-uTP3YeoY'
    },
    {
      title: 'Read MADS faculty member Paul Resnick\'s recent quora session',
      description: 'Read Professor Resnick\'s responses to questions like "How can technology companies help break filter bubbles?" and "How do we improve and measure the quality of information we share online?" in his recent quora session.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5UsMP0MEPvkfh3CrN8wBYF/d07e8d66de1bf84d4811e0a69e9df8ed/PaulResnickQuoraSession.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://www.quora.com/session/Paul-Resnick-1/1'
    },
    {
      title: 'Master of Applied Data Science Live Q&A with Faculty',
      description: 'Watch the recent live Q&A with MADS faculty. In this webinar, UMSI faculty Chris Brooks and Yan Chen answer questions about MADS coursework, areas of interest, real-world applications, and faculty expertise.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/350pOEd7QAptcjvSizkN9u/19adea122d63e258e2da0b0a69efad89/MADSLiveQ_A4_23.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://youtu.be/VecsQIJr_ng'
    },
    {
      title: 'Data Science Programs That Set You Up for Long-Term Success',
      description: 'Despite growing interest in data science courses across campuses nationwide, the data science pipeline is still too small to fill industries’ needs. While this is an issue for companies, it’s very clearly an opportunity for aspiring data scientists. Read more about the data science programs that are helping solve this problem!',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/fCtOBEzDDdjcKWrjsNRe6/c8b03c547171cbbfa86f33ba777a1185/MADSLogoNavy.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://blog.coursera.org/data-science-programs-that-set-you-up-for-long-term-success/'
    },
    {
      title: 'Learn about UMSI\'s Career Development Office',
      description: 'One unique feature of the degree is the support students receive from UMSI’s Career Development Office, including access to our online job boards and networks. View the Q&A webinar with the Career Development staff to learn how they provide mentoring and support for MADS students.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4goLkHarVLYz00l6EXrM8f/269c92bc8d2ea23d8d50b236feec65ad/UMich-MADS-News1.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://youtu.be/485u52yjhgU'
    },
    {
      title: 'Read about a current MADS student',
      description: 'Read a Q&A with current MADS student Ermias Bizuwork. Ermias currently lives in Atlanta, Georgia and works as a product manager at The Home Depot. He is interested in decisions being made with statistical support or a more scientific approach. He immediately begins to plan to apply ML and DL to business decisions and to web applications that are being built.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/vc5IYrEOIAOmwjSXJqD8S/991dd4a7525f8b445d76db3dd2b7d397/MADSErmiasStory.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://www.si.umich.edu/people/faces-umsi/faces-umsi-ermias-bizuwork-0'
    },
    {
      title: 'Learn More About The Master of Applied Data Science from UMSI',
      description: 'Faculty members of The Master of Applied Data Science at the University of Michigan School of Information sat down to discuss the new degree program earlier this year. They covered questions about pre-requisites, funding options, and how similar the degree is to the residential master’s program.',
      imgUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6VfBj61qRJK9gaOe2SmExE/45990fbfe038d586204e72cad5d41216/UMich-MADS-News2.jpg?auto=format%2Ccompress&dpr=1',
      link: 'https://www.youtube.com/watch?v=7hz3z4xy3yw&feature=youtu.be&utm_campaign=tpt&utm_source=join_list&utm_medium=email'
    }
  ];

  

  faqs: FAQ[] = [
    {
      question: 'Is the online program the same as the on-campus program?',
      answer: 'The MADS program is a unique degree geared toward building practical experience and creating a portfolio of work geared for professional development. This new program comes from the same #1 ranked Information Science program as the on-campus degrees and is taught by regular University of Michigan School of Information faculty.'
    },
    {
      question: 'Do graduates of the online program earn the same degree as graduates of the on-campus program?',
      answer: 'The MADS degree is offered only in online format, but the degree diploma and transcript are identical in form to the other graduate programs from the fully-accredited University of Michigan School of Information and do not differentiate between residential and online.'
    },
    {
      question: 'Can you switch between online and on-campus programs?',
      answer: 'No, there isn’t an equivalent on-campus program.'
    },
    {
      question: 'What is the time commitment required? Can working adults complete this program?',
      answer: 'This program is specifically designed to be feasible for working adults to complete. The time needed will vary based on your previous experience, the particular course you’re taking, and how many courses you choose to take at one time.'
    },
    {
      question: 'What is the school year schedule?',
      answer: 'The school year is broken up into three terms of approximately four months each. Courses are typically one month in length and award one credit, with three capstone courses that award 2-3 credits and may last longer than one month. Starting with the Fall 2020 cohort, students will be able to take a full time load, which is equivalent to 16 credits. Students will complete 34 credits to graduate from the program.'
    },
    {
      question: 'How long does it take to complete the program?',
      answer: 'Depending on how many courses you take concurrently, you may finish the program in 12, 20, or 24 months. You may choose to take longer.'
    },
    {
      question: 'What career options will I have with this degree?',
      answer: 'Graduates of this program will be prepared to become data scientists in the fields of their choice. Graduates from the on-campus Master of Science in Information program have a 98%+ job placement rate and go on to become Data Scientists at top companies such as Google, Facebook, and Amazon.'
    },
    {
      question: 'Can I transfer credits into the program?',
      answer: 'No. The program has been designed so that you can move quickly through courses where you already have previous experience.'
    },
    {
      question: 'Are there online office hours with instructors?',
      answer: 'Yes, students get direct access to faculty and TAs (Teacher Assistants) through live office hours and email conversations.'
    },
    {
      question: 'Are there networking opportunities to interact with fellow students?',
      answer: 'Yes, through the courses you will work alongside and on projects with students from around the world. There will be synchronous sessions weekly where you will have the opportunity to attend a virtual classroom and be online with classmates, and our experience suggests that strong bonds and study groups will often arise during your classes.'
    },
    {
      question: 'Do the same faculty teach online and on-campus courses?',
      answer: 'Yes, your instructors are the same ones that teach on campus in Michigan.'
    },
    {
      question: 'How does the online format work?',
      answer: 'To increase global access to this high-quality degree program, learners will be able to pursue their MADS degree through a 100% online format. Course information is viewed via a web browser.'
    },
    {
      question: 'Can I sample a course?',
      answer: 'At this point, no. If you’re in the degree program, there will be a brief add/drop period at the beginning of each course where you can see upcoming material.'
    },
    {
      question: 'Who can I contact if I have more questions?',
      answer: 'Email us anytime for information at umsi.mads@umich.edu.'
    },
    {
      question: 'What are the courses available?',
      answer: 'You can explore the MADS curriculum here. The rigorous curriculum prepares students to be leaders in the field by combining core data science courses (machine learning, natural language processing) with courses on persuasive communication, privacy, and data ethics. Students will work with real-world data sets from top companies.'
    },
    {
      question: 'Do students choose a concentration?',
      answer: 'No. There are themes and varied applications within the curriculum, where students will be able to use data sets that are relevant to their interests.'
    },
    {
      question: 'How many courses can students take at a time? How many courses are needed to complete the program?',
      answer: 'Starting with the Fall 2020 cohort, students may take a full time load. A total of 34 credits will be needed to complete the program, with multiple credits included in three capstone course series.'
    },
    {
      question: 'How flexible is the schedule?',
      answer: 'There will be several asynchronous sessions per week, designed to accommodate a variety of student schedules in different time zones.'
    },
    {
      question: 'Are internships part of the program?',
      answer: 'Internships are not a required part of the program, but students will have opportunities and support for internships during the degree.'
    },
    {
      question: 'What are the application requirements?',
      answer: 'Applicants for the degree program must have an undergraduate degree, foundational Python programming language, and introductory statistics. (Applicants will take one assessment.)'
    },
    {
      question: 'Do I need a Computer Science background?',
      answer: 'Applicants are not required to have an advanced technical background — all you need is basic statistics and Python proficiency. These skills can be learned through Statistics for Python and Python Fluency, which are available now on Coursera. All applicants will take one assessment in foundational Python programming language and introductory statistics before being fully admitted.'
    },
    {
      question: 'What are the prerequisites?',
      answer: 'A bachelor\'s degree is required. There is no minimum GPA requirement, but the university encourages 3.0 and above. No GRE is required. Work experience in a technical field is not required.'
    },
    {
      question: 'What if I don’t meet admissions requirements?',
      answer: 'We are interested in students with a passion for self-directed learning and a commitment to lifelong learning in all forms. If you lack certain requirements, taking and succeeding in online courses such as those offered on Coursera can help make your application stand out.'
    },
    {
      question: 'Is work experience required?',
      answer: 'Our application process is holistic, which is to say that we consider all aspects of your experience prior to applying, including both scholastic and career achievement. Specific work experience is not required, but it will be considered in your favor if included in the application. Basic statistics and Python proficiency are required, but you may learn these through traditional or online classes, rather than through employment.'
    },
    {
      question: 'Is there an application fee?',
      answer: 'The application fee for the MADS degree is the same for other University of Michigan School of Information master’s degrees. This year, those fees are $75 for U.S. residents and $90 for international applicants. Fee waivers are available for eligible applicants.'
    },
    {
      question: 'How do I apply?',
      answer: 'Visit our application. For more detailed information about application requirements, see visit the admissions criteria website.'
    },
    {
      question: 'Is there financial aid?',
      answer: 'Yes, the University of Michigan School of Information is committed to providing education to highly qualified students regardless of financial status. Learn more.'
    },
    {
      question: 'What is the program cost, and what is the payment schedule?',
      answer: 'The total cost of the 34-credit degree program is approximately $34,759 (about $1,022 per credit hour) for in-state students and approximately $46,149 (about $1,357 per credit hour) for out-of-state students, based on this year\'s estimated rates before fees.'
    },
    {
      question: 'Are there career services available?',
      answer: 'Students will have access to the 540k strong alumni network, as well as resume assistance and job boards. Students will also have access to corporate partnerships that the program has built with top companies.'
    },
    {
      question: 'Do online students have access to on-campus facilities?',
      answer: 'All students will have school email addresses, as well as access to support from UMSI. All students will be invited to graduate alongside other students on-campus when they complete the program.'
    },
    {
      question: 'Can online students participate in student clubs and activities?',
      answer: 'Students will be invited to formal activities such as UMSI Convocation and Commencement. MADS students may join UMSI student clubs and activities.'
    },
    {
      question: 'What are the English proficiency requirements?',
      answer: 'Non-native English speakers will need to take the Test of English as a Foreign Language (TOEFL) and submit scores to the school. A score of at least 100 on the Internet-based Test (IBT) is required for admission.'
    },
    {
      question: 'How do I submit international transcripts?',
      answer: 'We require one scanned or electronic transcript uploaded to the online application or mailed directly to us for all undergraduate and/or graduate programs from which you have degree(s). We will accept unofficial transcripts for application review, and will require official transcripts if offered admission.'
    }
  ];

  showAll: boolean = false;

  toggleShowAll() {
    this.showAll = !this.showAll;

  
 


  

}

}


