"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

export default function NavLinks() {
  const [anchorBook, setAnchorBook] = React.useState<null | HTMLElement>(null);
  const openBook = Boolean(anchorBook);
  const handleClickBook = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorBook(event.currentTarget);
  };
  const handleCloseBook = () => {
    setAnchorBook(null);
  };

  const [anchorStudent, setAnchorStudent] = React.useState<null | HTMLElement>(null);
  const openStudent = Boolean(anchorStudent);
  const handleClickStudent = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorStudent(event.currentTarget);
  };
  const handleCloseStudent = () => {
    setAnchorStudent(null);
  };

  const [anchorAdmin, setAnchorAdmin] = React.useState<null | HTMLElement>(null);
  const openAdmin = Boolean(anchorAdmin);
  const handleClickAdmin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAdmin(event.currentTarget);
  };
  const handleCloseAdmin = () => {
    setAnchorAdmin(null);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="/logo.png" width="50" height="50" />
          </IconButton>
          <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>            
            <Link href="/lfb/lease" color="inherit">Ausleihen</Link>
          </Typography>
          <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>            
            <Link href="/lfb/return" color="inherit">Zurückgeben</Link>
          </Typography>
          <Button
            id="book-button"
            aria-controls={openBook ? 'book-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openBook ? 'true' : undefined}
            onClick={handleClickBook}
            color="inherit"
          >
            <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>  
              Bücher
            </Typography>
          </Button>
          <Menu
            id="book-menu"
            anchorEl={anchorBook}
            open={openBook}
            onClose={handleCloseBook}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleCloseBook}><Link href="/lfb/books" color="inherit">Büchertypen</Link></MenuItem>
            <MenuItem onClick={handleCloseBook}><Link href="/lfb/books/items" color="inherit">Bücherliste</Link></MenuItem>
          </Menu>
          <Button
            id="student-button"
            aria-controls={openStudent ? 'student-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openStudent ? 'true' : undefined}
            onClick={handleClickStudent}
            color="inherit"
          >
            <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>  
              Schüler
            </Typography>
          </Button>
          <Menu
            id="Admin-menu"
            anchorEl={anchorAdmin}
            open={openAdmin}
            onClose={handleCloseAdmin}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleCloseAdmin}><Link href="/admin/users" color="inherit">Benutzerverwaltung</Link></MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseAdmin}><Link href="/admin/data/import" color="inherit">Datenimport</Link></MenuItem>
            <MenuItem onClick={handleCloseAdmin}><Link href="/admin/data/export" color="inherit">Datenexport</Link></MenuItem>
          </Menu>
          <Button
            id="admin-button"
            aria-controls={openAdmin ? 'admin-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openAdmin ? 'true' : undefined}
            onClick={handleClickAdmin}
            color="inherit"
          >
            <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>  
              Admin
            </Typography>
          </Button>
          <Menu
            id="student-menu"
            anchorEl={anchorStudent}
            open={openStudent}
            onClose={handleCloseStudent}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleCloseStudent}><Link href="/lfb/students/info/leases" color="inherit">Ausleihliste</Link></MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseStudent}><Link href="/admin/students/import" color="inherit">Schülerliste importieren</Link></MenuItem>
          </Menu>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
