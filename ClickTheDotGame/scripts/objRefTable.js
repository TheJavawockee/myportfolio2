const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{BG: 0},
	{Dot: 0},
	{Touch: 0},
	{ScoreText: 0},
	{TimerText: 0},
	{GameOverText: 0},
	{Mouse: 0},
	{Score: 0},
	{TimeLeft: 0}
];

self.InstanceType = {
	BG: class extends self.ISpriteInstance {},
	Dot: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	ScoreText: class extends self.ITextInstance {},
	TimerText: class extends self.ITextInstance {},
	GameOverText: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {}
}