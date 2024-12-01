import React from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box,Container,Grid,Typography,Link,IconButton } from '@mui/material';

function Footer() {
    const FooterData = [
        {
            Title:"Home",
            links:['Become Affiliate', 'Go Unlimited','Services']
        },
        {
            Title:"Products",
            links:['Design Systems','Themes & Templates','Mockups','Presentations','Wireframes Kits','UI Kits']
        },
        {
            Title:"Legals",
            links:['License','Refund Policy','About Us','Contacts']
        },
        {
            Title:"Blog",
            links:['Business Stories','Digital Store','Learning','Social Media']
        }
    ];
    const SocialIcons = [
        {icon: <Facebook />, href:'#'},
        {icon: <Twitter />, href:'#'},
        {icon: <Instagram />, href:'#'}
    ]
  return (
    <>
      <Box sx={{backgroundColor:'#000',color:'#fff',py:6}}>
          <Container maxWidth='lg'>
              <Grid container spacing={4}>
              <Grid item sx={12} md={3}>
                  <Typography>
                      <img className='w-64 md:w-full' src="/degic(1) 1.svg" alt="" />
                  </Typography>
              </Grid>
              {
                FooterData.map((section,index)=>(
                    <Grid item sx={6} md={2} key={index}>
                        <Typography>
                            {section.Title}
                        </Typography>
                        {
                            section.links.map((link,linkIndex)=>(
                                <Box key={linkIndex}>
                                    <Link href="#" underline='none' color='gray' display="block" sx={{my:1}}>
                                       {link}
                                    </Link>
                                </Box>
                            ))}
                    </Grid>
                ))}
              </Grid>
              <hr className='mt-10 mb-2' />
              <Box display='flex' justifyContent='center'>
                  {
                    SocialIcons.map((social,index)=>(
                        <IconButton key={index} color='inherit'>
                            {social.icon}
                        </IconButton>
                    ))}
              </Box>
              <Box mt={4} textAlign='center' color='gray'>
                 <Typography>
                 © {new Date().getFullYear()} Degic Copyright Allright reserved.
                 </Typography>
              </Box>
          </Container>
      </Box>
    </>
  )
}

export default Footer;