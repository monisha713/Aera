import { Directive , HostListener, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appThemeToggle]'
})
export class ThemeToggleDirective implements OnInit {
  private isDarkMode = false;
  private readonly themeKey = 'theme';

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    const savedTheme = localStorage.getItem(this.themeKey);
    this.isDarkMode = savedTheme ==='dark';
    this.applyTheme();
  }

  @HostListener ('click') toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem(this.themeKey, this.isDarkMode ? 'dark':'light');
    this.applyTheme();
  }
  private applyTheme(){
    if (this.isDarkMode){
      this.renderer.addClass(document.body, 'dark-theme');
    } 
    else{
      this.renderer.removeClass(document.body, 'dark-theme');

    }
  }

}
