import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { firstValueFrom, from, Observable } from 'rxjs';
import { PocService } from '../poc.service';
import { PocRoute } from '../poc.route';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'dexie';
import { ItemModel } from '../poc.models';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit, OnDestroy {
  item?: ItemModel;

  readonly videoStream$: Observable<MediaStream> = from(
    navigator!.mediaDevices!.getUserMedia(this.service.constrains),
  );

  readonly PocRoute = PocRoute;

  @ViewChild('videoElement')
  private readonly videoElRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement')
  private readonly canvasElRef!: ElementRef<HTMLCanvasElement>;

  private sub$!: Subscription;

  constructor(
    private readonly service: PocService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.sub$ = this.service
      .getLatestItem()
      .subscribe((item) => (this.item = item));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  async makePhoto() {
    const stream = await firstValueFrom(this.videoStream$);
    const setting = stream.getVideoTracks()[0].getSettings();

    this.canvasElRef.nativeElement.width = setting.width as number;
    this.canvasElRef.nativeElement.height = setting.height as number;
    this.canvasElRef.nativeElement
      .getContext('2d')
      ?.drawImage(this.videoElRef.nativeElement, 0, 0);

    const imageSrc = this.canvasElRef.nativeElement.toDataURL('image/webp');
    const itemId = await this.service.addItem({ imageSrc });

    await this.router.navigate(['..', PocRoute.gallery, itemId], {
      relativeTo: this.activatedRoute,
    });
  }
}
