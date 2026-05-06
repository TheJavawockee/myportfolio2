const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Audio.Cnds.IsAnyPlaying,
		C3.Plugins.Audio.Acts.FadeVolume
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{player: 0},
	{Sprite3: 0},
	{Button: 0},
	{Audio: 0},
	{Touch: 0},
	{Mouse: 0},
	{Door: 0},
	{Door2: 0},
	{crown: 0},
	{Keyboard: 0},
	{TiledBackground2: 0},
	{Solid: 0},
	{TiledBackground3: 0},
	{Door3: 0},
	{Door4: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {},
	Audio: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Door: class extends self.ISpriteInstance {},
	Door2: class extends self.ISpriteInstance {},
	crown: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Door3: class extends self.ISpriteInstance {},
	Door4: class extends self.ISpriteInstance {}
}