import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blogging';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {

  categories = ['technical', 'personal', 'nature'];
  constructor(private service: BlogService) { }

  ngOnInit(): void {
  }
  insert(blog: Blog) {
    // alert(blog.title);
    this.service.addBlog(blog);
  }
}
