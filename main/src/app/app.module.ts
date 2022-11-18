
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { CdkTableModule } from '@angular/cdk/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './adminpage/layout/full/full.component';
import { AppBlankComponent } from './adminpage/layout/blank/blank.component';

import { VerticalAppHeaderComponent } from './adminpage/layout/full/components/vertical-header/vertical-header.component';
import { VerticalAppSidebarComponent } from './adminpage/layout/full/components/vertical-sidebar/vertical-sidebar.component';

import { AppBreadcrumbComponent } from './adminpage/layout/full/components/breadcrumb/breadcrumb.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDown, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowLeftCircle, ArrowLeft, ArrowRight, ArrowRightCircle, ArrowUp, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, AtSign, Award, BarChart2, BarChart, BatteryCharging, Battery, BellOff, Bell, Bluetooth, Bold, BookOpen, Book, Bookmark, Box, Briefcase, Calendar, CameraOff, Cast, CheckCircle, CheckSquare, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, CloudDrizzle, CloudLightning, CloudOff, CloudRain, Cloud, CloudSnow, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DollarSign, DownloadCloud, Download, Droplet, Edit, Edit2, Edit3, ExternalLink, EyeOff, Eye, Facebook, FastForward, Feather, Figma, FileMinus, FilePlus, FileText, File, Film, Filter, Flag, Folder, FolderMinus, FolderPlus, Framer, Frown, Gift, GitBranch, GitCommit, GitMerge, GitPullRequest, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, HelpCircle, Hexagon, Home, MoreHorizontal, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link, Link2, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, MapPin, Map, Maximize, Maximize2, Meh, Menu, MessageCircle, MessageSquare, Mic, MicOff, Minimize, Minimize2, MinusCircle, MinusSquare, Minus, Monitor, Moon, MoreVertical, MousePointer, Move, Music, Navigation, Navigation2, Octagon, Package, Paperclip, PauseCircle, Pause, PenTool, Percent, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, Phone, PhoneOff, PhoneOutgoing, PieChart, Play, PlayCircle, Plus, PlusCircle, PlusSquare, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share, Share2, Shield, ShieldOff, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Tool, Trash, Trash2, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitch, Twitter, Type, Umbrella, Underline, Unlock, Upload, UploadCloud, User, UserCheck, UserMinus, UserPlus, UserX, Users, Video, VideoOff, Voicemail, Volume, Volume1, Volume2, VolumeX, Watch, Wifi, WifiOff, Wind, XCircle, XOctagon, XSquare, X, Youtube, Zap, ZapOff, ZoomIn, ZoomOut } from 'angular-feather/icons';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CreditComponent } from './adminpage/views/credit/credit.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};

// Select some icons (use an object, not an array)
const icons = {
    Camera, Heart, Github, Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDown, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowLeftCircle, ArrowLeft, ArrowRight, ArrowRightCircle, ArrowUp, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, AtSign, Award, BarChart2, BarChart, BatteryCharging, Battery, BellOff, Bell, Bluetooth, Bold, BookOpen, Book, Bookmark, Box, Briefcase, Calendar, CameraOff, Cast, CheckCircle, CheckSquare, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, CloudDrizzle, CloudLightning, CloudOff, CloudRain, Cloud, CloudSnow, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DollarSign, DownloadCloud, Download, Droplet, Edit, Edit2, Edit3, ExternalLink, EyeOff, Eye, Facebook, FastForward, Feather, Figma, FileMinus, FilePlus, FileText, File, Film, Filter, Flag, Folder, FolderMinus, FolderPlus, Framer, Frown, Gift, GitBranch, GitCommit, GitMerge, GitPullRequest, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, HelpCircle, Hexagon, Home, MoreHorizontal, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link, Link2, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, MapPin, Map, Maximize, Maximize2, Meh, Menu, MessageCircle, MessageSquare, Mic, MicOff, Minimize, Minimize2, MinusCircle, MinusSquare, Minus, Monitor, Moon, MoreVertical, MousePointer, Move, Music, Navigation, Navigation2, Octagon, Package, Paperclip, PauseCircle, Pause, PenTool, Percent, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, Phone, PhoneOff, PhoneOutgoing, PieChart, Play, PlayCircle, Plus, PlusCircle, PlusSquare, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share, Share2, Shield, ShieldOff, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Tool, Trash, Trash2, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitch, Twitter, Type, Umbrella, Underline, Unlock, Upload, UploadCloud, User, UserCheck, UserMinus, UserPlus, UserX, Users, Video, VideoOff, Voicemail, Volume, Volume1, Volume2, VolumeX, Watch, Wifi, WifiOff, Wind, XCircle, XOctagon, XSquare, X, Youtube, Zap, ZapOff, ZoomIn, ZoomOut
};

@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
        VerticalAppHeaderComponent,
        SpinnerComponent,
        AppBlankComponent,
        VerticalAppSidebarComponent,
        AppBreadcrumbComponent,
        CreditComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        HttpClientModule,
        PerfectScrollbarModule,
        SharedModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatTableModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatBadgeModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        CdkTableModule,
        A11yModule,
        BidiModule,
        CdkAccordionModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        NgMultiSelectDropDownModule.forRoot(),
        RouterModule.forRoot(AppRoutes, { relativeLinkResolution: 'legacy' }),
        HttpClientModule,
        FeatherModule.pick(icons),
        FeatherModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
