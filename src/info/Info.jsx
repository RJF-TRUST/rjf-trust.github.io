import {Facebook, GitHub, Instagram, LinkedIn, X} from "@mui/icons-material";
import self from "../img/self.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jacky",
    lastName: "Fan",
    initials: "jf", // the example uses first and last, but feel free to use three or more if you like.
    position: "Senior Cloud Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Sydney, Australia'
        },
        {
            emoji: "💼",
            text: "Amazon Web Services"
        },
        {
            emoji: "🐳",
            text: "Kubestronaut"
        },
        {
            emoji: "🏆",
            text: "AWS CloudFormation SME"
        },
        {
            emoji: "🏆",
            text: "AWS CodeSuite SME"
        },
        {
            emoji: "🏆",
            text: "AWS Control Tower SME"
        },
        {
            emoji: "🏆",
            text: "AWS Elastic Kubernetes Service (EKS) SME"
        },
        {
            emoji: "📧",
            text: "jacky@fan.nz"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/fanq10",
            icon: Facebook,
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/fanq101/",
            icon: Instagram,
            label: 'instagram'
        },
        {
            link: "https://github.com/orgs/aws-6w8hnx/repositories",
            icon: GitHub,
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/fanq10/",
            icon: LinkedIn,
            label: 'linkedin'
        },
        {
            link: "https://x.com/fanq10",
            icon: X,
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. `icon` is any component from @mui/icons-material
// (https://mui.com/material-ui/material-icons/); import it at the top of this file.
// Just change the links so that they lead to your social profiles.

    ],
    bio: [
        "Hi, I'm Jacky, a Senior Cloud Engineer at Amazon Web Services. I work with AWS customers on Kubernetes (Amazon EKS), infrastructure as code and CI/CD, and I'm an AWS Subject Matter Expert for EKS, CloudFormation, CodeSuite and Control Tower.",
        "I'm also a CNCF Kubestronaut. Outside work I run a self-hosted Kubernetes platform at home, where I try out GitOps, service mesh and platform engineering tools hands-on.",
        "I studied Computer Science at Auckland University of Technology. When I'm away from the keyboard I'm usually skiing, photographing the mountains or cooking. I'm also convinced AI will run the world one day, so I'm learning to work with it early."
    ],
    skills: [ // each category renders as a directory in the "skills/tools" terminal on the About page
        {
            category: 'cloud',
            items: ['Amazon EKS', 'AWS Control Tower & AFT', 'AWS CodeSuite', 'Microsoft Azure']
        },
        {
            category: 'cloud-native',
            items: ['Kubernetes', 'Helm', 'Cilium', 'Istio', 'Kyverno', 'Prometheus', 'Backstage', 'CRI-O & Docker']
        },
        {
            category: 'gitops-and-ci-cd',
            items: ['Argo CD', 'Flux CD', 'GitHub Actions', 'GitLab CI/CD']
        },
        {
            category: 'infrastructure-as-code',
            items: ['Terraform', 'AWS CDK', 'AWS CloudFormation', 'Ansible']
        },
        {
            category: 'systems',
            items: ['Linux (Debian, Ubuntu)', 'VMware vSphere', 'PostgreSQL']
        },
        {
            category: 'languages',
            items: ['Python', 'Bash', 'TypeScript / Node.js', 'Java']
        }
    ],
    hobbies: [
        {
            label: 'travel',
            emoji: '🛫'
        },
        {
            label: 'skiing',
            emoji: '🎿'
        },
        {
            label: 'photography',
            emoji: '📸'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    contact: { // shown on the Contact Me page; email uses a mailto: link, the others open in a new tab
        intro: "Happy to chat about Kubernetes, platform engineering or AWS. Email or LinkedIn is the fastest way to reach me.",
        links: [
            {
                id: 'linkedin',
                label: 'LinkedIn',
                text: 'linkedin.com/in/fanq10',
                link: 'https://www.linkedin.com/in/fanq10/'
            },
            {
                id: 'credly',
                label: 'Credly',
                text: 'credly.com/users/fanq10',
                link: 'https://www.credly.com/users/fanq10/badges/credly'
            },
            {
                id: 'email',
                label: 'Email',
                text: 'jacky@fan.nz',
                link: 'mailto:jacky@fan.nz'
            }
        ]
    }
}
