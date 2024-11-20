import { Component } from '@angular/core';

@Component({
  selector: 'app-mid-section',
  templateUrl: './mid-section.component.html',
  styleUrls: ['./mid-section.component.css']
})
export class MidSectionComponent {
  mainTitle: string = 'Become a data science leader with a degree from the #1 public research university in the U.S.';

  paragraphs: string[] = [
    'Learn in-demand data science skills and how to apply them to real-world problems with the online Master of Applied Data Science (MADS) degree from the University of Michigan School of Information.',
    'In this online degree program, you’ll have the unique opportunity to develop an end-to-end perspective on data science and prepare for leadership in the field. As a MADS student, you’ll master core concepts and delve into essential topics such as big data, data ethics, data privacy, machine learning, natural language processing, network analysis, and more. By working with real data sets from top companies, you’ll put learning into practice, build your portfolio, and be ready to advance a successful data science career in any industry.',
    'The only prerequisites to enroll in the program are knowledge of statistics and Python. You are not required to have a bachelor’s degree in a science or math discipline, or work experience in a technical field. We do not require the GRE or any other additional tests as part of your admissions process.'
  ];

  sections = [
    {
      title: 'Advance your data science career',
      content: 'As an online student in the University of Michigan’s School of Information, you’ll prepare to be a leader in the field by developing an end-to-end perspective on data science. Past graduates from the School of Information\'s on-campus programs have a 95% job placement rate, and go on to become data scientists at places like Google, Facebook, and Amazon.'
    },
    {
      title: 'Earn your degree from a top-ranked institution',
      content: 'The University of Michigan is considered the #1 public research university in the U.S., according to the National Science Foundation. With more than 630,000 proud alumni, U-M is a leader in higher education, attracting top students and faculty from across the globe. More than 1 million learners have taken courses online from UMSI faculty since launching on Coursera.'
    },
    {
      title: 'Join a global community',
      content: 'Whether you’re in the Upper Peninsula of Michigan, or in Europe, Asia, or Africa, MADS learners all share one thing: a passion for data. As a member of our global community, you’ll have opportunities to connect and collaborate with other School of Information students through peer review sessions, mentorship, the student Slack channel, and more.'
    }
  ];

  applicationInfo = {
    title: 'Application Information',
    deadlines: [
      { label: 'Applications Open', date: 'July 16, 2024' },
      { label: 'Final Deadline', date: 'November 15, 2024' }
    ],
    contact: 'Have questions?',
    link: 'https://www.si.umich.edu/programs/master-applied-data-science/connect-us',
    email: 'umsi.mads.edu'
  };

  additionalInfo = 'Per iniziare il tuo percorso di studi, puoi scegliere tra corsi, specializzazioni o certificati.';

  testimonials = [
    {
      name: 'Ani M.',
      imageSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7z06HcZpqDnvnQo7fdaNa1/1aaefa7b5615330af1ab0f45a330f546/MADSAni_Madurkar.jpeg?q=60&auto=format%2Ccompress&dpr=1',
      imageAlt: 'Ani M.',
      quote: 'I really love how innovative and engaging I’ve felt the content has been so far. It really is like no other education I’ve had before.',
      courseLink: 'https://www.coursera.org/degrees/master-of-applied-data-science-umich',
      course: 'Master of Applied Data Science'
    },
    {
      name: 'Stacy B.',
      imageSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3IedLAK2VvcVP2hnMWstTx/0a84e5692e27761042993031d6c1084e/MADSbeck_stacey.jpeg?q=60&auto=format%2Ccompress&dpr=1',
      imageAlt: 'Stacy B.',
      quote: 'Applying my knowledge to something meaningful based on real-life scenarios is important to me. It helps me maintain a level of curiosity that drives my passion.',
      courseLink: 'https://www.coursera.org/undefined/master-of-applied-data-science-umich',
      course: 'Master of Applied Data Science'
    },
    {
      name: 'Jenna M.',
      imageSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/72cThuh966ryWjWdbQn4yl/45167efbdee721ac5c492dfa8851c805/MADSjenna_mekled.png?q=60&auto=format%2Ccompress&dpr=1',
      imageAlt: 'Jenna M.',
      quote: 'The big draw of this program was that it was an online program for students with diverse educational backgrounds. I am amazed at how much I have been able to learn in such a short amount of time.',
      courseLink: 'https://www.coursera.org/degrees/master-of-applied-data-science-umich',
      course: 'Master of Applied Data Science'
    }
  ];

  courses = [
    {
      title: 'Python for Everybody',
      university: 'University of Michigan',
      imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/python.jpg?auto=format%2Ccompress&dpr=1',
      coursesCount: 5,
      url: 'https://www.coursera.org/specializations/python'
    },
    {
      title: 'Applied Data Science with Python',
      university: 'University of Michigan',
      imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c8/8d6df01eb311e6b5f5f786b289d8ba/pythondatascience_specialization_final.png?auto=format%2Ccompress&dpr=1',
      coursesCount: 5,
      url:'https://www.coursera.org/specializations/data-science-python'
    },
    {
      title: 'Python 3 Programming',
      university: 'University of Michigan',
      imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/be/0ce870e9cb11e8b2d233b4be6a9cf3/pythonfluency_1x1_4.png?auto=format%2Ccompress&dpr=1',
      coursesCount: 5,
      url:'https://www.coursera.org/specializations/python-3-programming'
    },
    {
      title: 'Statistics with Python',
      university: 'University of Michigan',
      imageUrl: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5c/547de0e94011e8a3e3531fdb33eae4/statswpy_specialization.jpg?auto=format%2Ccompress&dpr=1&auto=format%2Ccompress&dpr=1',
      coursesCount: 3,
      url:'https://www.coursera.org/specializations/statistics-with-python'
    }
  ];

  tabs = [
    {
      id: 'related-to',
      label: 'Correlato a',
      content: `Questi corsi possono fornire un'anteprima degli argomenti, dei materiali e dei docenti di un corso di laurea correlato, che può aiutarti a decidere se l'argomento o l'università sono adatti a te.`
    }
  ];
}
